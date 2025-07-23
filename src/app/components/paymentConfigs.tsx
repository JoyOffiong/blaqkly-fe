 import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import UseALATPay from "react-alatpay";
import { useBudPayPayment } from "@budpay/react";




//alatpay
 const ALATconfig=(loggedInUser: any, total: number, onTransaction: Function, onClose: Function) => UseALATPay({
      amount: total,
      apiKey: "b3273ae16f5443cab2e622062d0cd075",
      businessId: "582418f7-032f-48ca-27c8-08dcd31fac98",
      currency: "NGN",
      email: loggedInUser?.email,
      firstName: loggedInUser?.firstName,
      lastName: loggedInUser?.lastName,
      color: "#000000",
      metadata: undefined,
      phone: "09099912345",
      onClose,
      onTransaction
    });

//budpay
   const BUDPAYconfig=(loggedInUser: any, total: number, onComplete: Function, onCancel: Function)=>   useBudPayPayment({
        api_key: 'pk_test_tlescwyoairgxmvixkf0vxqqli7yb1bcedpchl', 
        customer:{
       email: 'blaqkly@gmail.com',
      first_name: loggedInUser?.firstName,
      last_name: loggedInUser?.lastName, 
      phone: "09099912345"
        },
      amount: total,
      currency: 'NGN',
      reference: '' + Math.floor((Math.random() * 100000000000) + 1) + new Date().getSeconds(),
      callback_url: "http://localhost:3000/order_success",
        onComplete(response) {
            return response
        },
        onCancel(response) {
            return response
        }
    });

//paystack

export const paymentGateways ={
    ALATconfig,
    BUDPAYconfig
}
    



  