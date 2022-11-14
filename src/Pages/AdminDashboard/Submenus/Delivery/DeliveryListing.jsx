import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./DeliveryListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
const columns = [
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'Date',
    headerName: 'Date',
    width: 140,
    editable: true,
  },
  {
    field: 'DeliveryNo',
    headerName: 'Delivery.No',
    width: 130,
    editable: true,
  },
  {
    field: 'INVNo',
    headerName: 'Invoice No',
    width: 140,
    editable: true,
  },
  {
    field: 'PONo',
    headerName: 'PO No',
    editable: true,
    width: 160,
  },
  {
    field: 'DeliveryMethod',
    headerName: 'Delivery Method',
    editable: true,
    width: 160,
  },
  {
    field: 'PaymentType',
    headerName: 'Payment Type',
    editable: true,
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    editable: true,
    width: 120,
    renderCell:(params)=>{
        return(
            <>
            <VisibilityIcon/>
            <Link to={"/DeliveryAmend/"+params.row.id}>
            <button>Edit</button>
            </Link>
            <DeleteOutlineIcon/>
            </>
        )
    }
  },
];

const rows = [
  { id: 1,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 2,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 3,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 4,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 5,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 6,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 7,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 8,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 9,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 10,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 11,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 12,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 13,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 14,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 15,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 16,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 17,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 18,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 19,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
  { id: 20,Date: '23rd sep 2022', DeliveryNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,DeliveryMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam'},
];

export default function DeliveryListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="DeliveryListing">
         <h3 className="DeliveryListingWidgetClient">Delivery Listing</h3>
        <div style={{ height: 630, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
    </div>
          </div>
          </div> 
    )
}