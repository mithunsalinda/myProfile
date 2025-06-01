// import Header from '@/components/layout/Header'
// import Sidebar from '@/components/layout/Sidebar'
// import ProfileHeader from '@/components/profile/ProfileHeader'
// import ProfilePersonalPreference from '@/components/profile/ProfilePersonalPreference'
// import { sidebarItemsData } from '@/const/sidebarItemsData'
// import React from 'react'

// export default function PersonalPreferencePage() {
// //   return (
// // <div className="min-h-screen bg-[url('/bg-blur.jpg')] bg-cover bg-center text-black font-sans">
// //       <Header />

// //       <div className="flex flex-col sm:flex-row">
// //         <Sidebar items={sidebarItemsData}/>
// //         <main className="flex-1 p-6">
// //           <ProfileHeader />
// //           <hr className="border-black mb-6" />
// //           <div className="flex flex-col md:flex-row items-start gap-10">
// //             <ProfilePersonalPreference />
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   )
// // }

import { redirect } from 'next/navigation';

export default function PersonalPreferencePage() {
  redirect('/my_profile/personal-preferences/view');
}
