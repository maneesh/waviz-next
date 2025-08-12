import React from 'react'
import Navbar from '@/component/home/Navbar'
import Blockchainhero from '@/component/blockchain/Blockchainhero'
import Blockchainabout from '@/component/blockchain/Blockchainabout'
import Blockchainfooter from '@/component/blockchain/Blockchainfooter'
import Blockchainmain from '@/component/blockchain/Blockchainmain'
export default function page() {
  return (
    <div>
  <Navbar/>
  <Blockchainhero/>
  <Blockchainabout/>
  <Blockchainmain/>
  <Blockchainfooter/>
  </div>
  )
}
