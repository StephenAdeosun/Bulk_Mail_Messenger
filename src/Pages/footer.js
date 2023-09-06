import React from "react";
import { Box,Heading,Image, Text, Button } from "@chakra-ui/react";
import Twitter from '../images/Frame 1441.png'
import Facebook from '../images/Frame 1442.png'
import Instagram from '../images/Frame 1439.png'
function Footer(){
return(
    <Box mt={'10'}>
<Box bgColor={'#4335E2'}>
    <Box textAlign={'center'} padding={'10'}>
        <Text fontSize={'4xl'} fontWeight={'3xl'} marginBottom={'6'} color={'white'}>Ready to try our free trial?</Text>
        <Text maxWidth={'500px'} margin={'auto'} lineHeight={'6'} color={'white'}>Engage your audience on a personal level by customizing messages with our friendly Bulk Messager.</Text>
        <Button bgColor={'white'} color={'#4335E2'} marginTop={'8'}  _hover={{bgColor:'white'}}>Try 3days Free Trial</Button>
    </Box>
</Box>
<Box bgColor={'#00112D'} color={'white'} py={'10'}>
    <Box  mt={'20'} display={'flex'} justifyContent={'center'} gap={'16'} flexWrap={'wrap'}>
        
            <Text fontSize={'sm'}>About us</Text>
            <Text fontSize={'sm'}>Contact us</Text>
            <Text fontSize={'sm'}>Privacy policy</Text>
            <Text fontSize={'sm'}>Terms of use</Text>
        
    </Box>
    <Box>
    <Box marginTop={'10'} borderTop={'2px solid #D0D0D0'} pt={'6'} display={'flex'} justifyContent={'center'} gap={'4'} flexWrap={'wrap'}>
        <Image src={Twitter} cursor={'pointer'}/>
        <Image src={Facebook} cursor={'pointer'}/>
        <Image src={Instagram} cursor={'pointer'}/>
    </Box>
    <Box>
        <Text textAlign={'center'} marginTop={'10'} fontSize={'sm'}>© 2023 Quaapay. All rights reserved</Text>
    </Box>
   </Box>

    
    </Box>
    </Box>
);
}
export default Footer;