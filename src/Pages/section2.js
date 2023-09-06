import React from "react";
import { Box,Heading,Image, Text, Link, VStack, Code, Grid, Center } from "@chakra-ui/react";
import QrCode from '../images/Frame 124.png'
function Section2() {
  return (
    <Box bgColor={'#00112D'}>
   <Box maxWidth={'1200px'} margin={'auto'} >
   <Box bgColor='#00112D' py={10}>
    <Text textAlign='center' fontSize={'md'}>Key features</Text>
<Text textAlign='center' fontSize={'4xl'} marginTop={'5'} color={'white'}>Why quapaay bulk messenger</Text>
<Text textAlign='center' fontSize={'sm'} color={'#D0D0D0'}  marginTop={'3'} maxWidth={'550px'} margin={"auto"}>We have built our own tech stack. no third party api, we do not depend on technical suppliers, we built everything ourselves.</Text>
</Box>
<Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={'10'} marginTop={'10'} paddingBottom={'10'}>
    <Box bgColor={'#29374F'} display={'flex'} alignItems={'center'} maxWidth={'450px'} gap={'5'} py={{base:'3', sm:'6' ,md:'8'}} borderRadius={'xl'} px={{base:'4', sm:'6' }}>
<Image src={QrCode} width={'50px'} h={'50px'}/>
<Box>
<Text  fontSize={'lg'} color={'white'}>Send bulk emails</Text>
<Text  fontSize={'14px'}  marginTop={'3'} color={'white'} >Easily send emails to thousands of recipients when you join our platform at once.</Text>
</Box>
</Box>
    <Box bgColor={'#29374F'} display={'flex'} alignItems={'center'} maxWidth={'450px'} gap={'5'}borderRadius={'xl'}  py={{base:'3', sm:'6' ,md:'8'}} px={{base:'4', sm:'6' }}>
<Image src={QrCode} width={'50px'} h={'50px'}/>
<Box>
<Text  fontSize={'lg'} color={'white'}>Personalization</Text>
<Text  fontSize={'14px'}  marginTop={'3'} color={'white'} >Customize each email with recipient name and other details that suits your brand..</Text>
</Box>
</Box>
    <Box bgColor={'#29374F'} display={'flex'} alignItems={'center'} maxWidth={'450px'} gap={'5'} borderRadius={'xl'} py={{base:'3', sm:'6' ,md:'8'}} px={{base:'4', sm:'6' }}>
<Image src={QrCode} width={'50px'} h={'50px'}/>
<Box>
<Text  fontSize={'lg'} color={'white'} >Dashboard management</Text>
<Text  fontSize={'14px'}  marginTop={'3'} color={'white'} >Manage sent emails and track delivery status with our dashboard.</Text>
</Box>
</Box>
    <Box bgColor={'#29374F'} display={'flex'} alignItems={'center'} maxWidth={'450px'} gap={'5'} borderRadius={'xl'}  py={{base:'3', sm:'6' ,md:'8'}} px={{base:'4', sm:'6' }}>
<Image src={QrCode} width={'50px'} h={'50px'}/>
<Box>
<Text  fontSize={'lg'} color={'white'}>API integration</Text>
<Text  fontSize={'14px'}  marginTop={'3'} color={'white'} >Use our developed api integration to send emails to your recipient for free.</Text>
</Box>
</Box>
</Box>
   </Box>
   </Box>
  );
}

export default Section2;