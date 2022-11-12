import React from 'react'
import "./MarketingWidget.css"

export default function MarketingWidget() {
  return (
    <div className="MarketingWidget">
        <h3 className="MarketingWidgetTitle">Marketing</h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Coupon No</th>
          <th className="widgetLgTh">Date Of Creation</th>
          <th className="widgetLgTh">Date Of Redraw</th>
          <th className="widgetLgTh">Invoice No</th>
          <th className="widgetLgTh">Distributor No</th>
          <th className="widgetLgTh">Invoice Amount</th>
          <th className="widgetLgTh">Discount Type</th>
          <th className="widgetLgTh">Discount Amount</th>
          <th className="widgetLgTh">Total</th>
          <th className="widgetLgTh">Create By</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">CO-9237</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgDistributorNo">DO-0000006</td>
          <td className="widgetLgInvoiceAmount">10000</td>
          <td className="widgetLgDiscountType">5%</td>
          <td className="widgetLgDiscountAmount">-500</td>
          <td className="widgetLgTotal">9500</td>
          <td className="widgetLgCreateBy">Maria</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">CO-9237</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgDistributorNo">DO-0000006</td>
          <td className="widgetLgInvoiceAmount">10000</td>
          <td className="widgetLgDiscountType">5%</td>
          <td className="widgetLgDiscountAmount">-500</td>
          <td className="widgetLgTotal">9500</td>
          <td className="widgetLgCreateBy">Maria</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">CO-9237</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgDistributorNo">DO-0000006</td>
          <td className="widgetLgInvoiceAmount">10000</td>
          <td className="widgetLgDiscountType">5%</td>
          <td className="widgetLgDiscountAmount">-500</td>
          <td className="widgetLgTotal">9500</td>
          <td className="widgetLgCreateBy">Maria</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">CO-9237</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgDate">5/07/2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgDistributorNo">DO-0000006</td>
          <td className="widgetLgInvoiceAmount">10000</td>
          <td className="widgetLgDiscountType">5%</td>
          <td className="widgetLgDiscountAmount">-500</td>
          <td className="widgetLgTotal">9500</td>
          <td className="widgetLgCreateBy">Maria</td>
        </tr>
      </table>
    </div>
  )
}
