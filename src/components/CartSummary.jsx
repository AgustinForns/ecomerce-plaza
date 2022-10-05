import React, {} from "react"
import Typography from '@mui/material/Typography';


export default function CartSummary({totalPrice}){

   
    return(
    <>                   
        
        <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor:`burlywood`, color:` rgb(90, 89, 105)`, margin:`30px`, padding:`20px`}}>
            Precio total a pagar: ${totalPrice}
          </Typography>
       
    </>     
      

    )

}