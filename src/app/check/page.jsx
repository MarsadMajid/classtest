import React from 'react'


const fetchBills = async ()=>{
    try {
      const bills = await prisma.Bills.findMany()
      console.log(bills)
      return bills
    } catch (error) {
      console.log("error",error);
    }
  }
const page =  async () => {
    const bills = await fetchBills()
  return (
    <div>
  <div >
      <h2>Bill List</h2>
      <table>
        <thead>
          <tr >
            <th>Consumer</th>
            <th>Units</th>
            <th>Address</th>
            <th >Status</th>
          </tr>
        </thead>
        <tbody>
          {bills?.map((bill) => (
            <tr key={bill.id} >
              <td>{bill.consumerNumber}</td>
              <td>{bill.units}</td>
              <td>{bill.address}</td>
              {/* <td className={bill.status ? paid : notpaid}>{bill.status ? "Paid" : "Not Paid"}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default page
