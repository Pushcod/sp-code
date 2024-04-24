import React from 'react'
import SidebarProject from "../SidebarProject/SidebarProject"
import SidebarBooks from "../SidebarBooks/SidebarBooks"

const RightSidebar = ({ className = null }) => {
  return (
    <aside className={className + ' min-w-[380px] h-[calc(100vh_-_40px)] '}>
      <div className="w-full flex flex-col gap-6">
        <SidebarProject getProject={''}/>
        <SidebarBooks getBooks={''}/>
      </div>
    </aside>
  )
}

export default RightSidebar
