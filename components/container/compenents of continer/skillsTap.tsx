

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function SkillsTap() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="passwor">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="border">
        <p>ggghhhhhhhhhhh</p>
    </div>
  </TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </div>
  )
}
