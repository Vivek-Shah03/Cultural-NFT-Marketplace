import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Buffer } from 'buffer'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { wait } from '@testing-library/user-event/dist/utils'

const Home = ({ marketplace, nft, account }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount()
    let items = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i)
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId)
        wait(10)
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        wait(10)
        const metadata = await response.json()
        wait(10)
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId)
        wait(10)
        const img = new Buffer.from(metadata.image.buffer).toString("base64")
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: img
        })
      }
    }
    setItems(items)
    setLoading(false)
  }

  const buyMarketItem = async (item) => {
    await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }

  useEffect(() => {
    loadMarketplaceItems()
  }, [])
  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )
  
    items.sort((a, b) => {
      if( a.totalPrice < b.totalPrice )
        return 1;
      else
        return -1;
    })
  // console.log(items)
  return (
    <div className="flex justify-center">
      {/* <Button onClick={() => {

      }}></Button> */}
      {items.length > 0?
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                <Card.Img style={{ borderRadius: '5px',padding: '12px' }} variant="top" src={"data:image/png;base64," + item.image} />
                  <Card.Body color="secondary">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {
                        (item.seller.toLowerCase() !== account) ?
                        <div className='d-grid'>
                          <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
                            Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                          </Button>
                        </div> : <div className='d-grid'>
                          <Button variant="primary" size="lg" disabled={true}>
                            Owned By You
                          </Button>
                        </div>
                    }
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </main>
        )}
    </div>
  );
}
export default Home