import React from 'react'
import { PieChart, ChevronRight, LogOut, BookOpen, BookText, ShoppingBag, MessageCircle, Users, UserCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Skeleton } from '@/components/ui/skeleton'

// ill use this for the avatar

type DashboardSidebarProps = React.PropsWithChildren & {
    className?: string;
  };

const DashboardSidebar = ({ children }: DashboardSidebarProps) => {
    const router = useRouter();
    const { route } = useRouter();

    const handleLogout = () => {
        router.push("/");
    }

  return (
    <>
        <aside className='relative'>
            <div className="lg:flex flex-col h-screen w-64 bg-white shadow-xl hidden">
                <div className="flex items-center justify-center h-20">
                    <h1 className="text-2xl font-bold">Admin</h1>
                </div>
                {/* <nav className="flex-grow"> */}
                    <ul className="flex flex-col py-4 px-4">
                        <Link href="/dashboard/admin/account">
                            <li
                                className={
                                route === "/dashboard/admin/account"
                                ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <PieChart size="20" />
                                </span>
                                Dashboard
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/courses">
                            <li
                                className={
                                route === "/dashboard/admin/courses"
                                ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <BookOpen size="20" />
                                </span>
                                Courses
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/subscription-plans">
                            <li
                                className={
                                route === "/dashboard/admin/subscription-plans"
                                ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <BookText size="20" />
                                </span>
                                Subscription Plans
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/transactions">
                            <li
                                className={
                                route === "/dashboard/admin/transactions"
                                ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <BookText size="20" />
                                </span>
                                Transactions
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/tutors">
                            <li
                                className={
                                route === "/dashboard/admin/tutors"
                                ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <ShoppingBag size="20" />
                                </span>
                                Tutors
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/students">
                            <li
                                className={
                                route === "/dashboard/admin/students"
                                ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <Users size="20" />
                                </span>
                                Students
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/assignments">
                            <li
                                className={
                                route === "/dashboard/admin/assignments"
                                ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <MessageCircle size="20" />
                                </span>
                                Assignments
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/chat-forum">
                            <li
                                className={
                                route === "/dashboard/admin/chat-forum"
                                    ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <MessageCircle size="20" />
                                </span>
                                Subscription Plans
                                </div>
                            </li>
                        </Link>

                        <Link href="/dashboard/admin/support">
                            <li
                                className={
                                route === "/dashboard/admin/support"
                                    ? "bg-[#1C1C1C0D] py-3 pl-10 text-[#1C1C1C] rounded-xl"
                                : "my-1 py-3 pl-10 hover:bg-[#1C1C1C0D] hover:text-[#1C1C1C] rounded-xl"
                                }
                            >
                                <div className="flex items-center">
                                <span className="mr-3">
                                    <UserCircle size="20" />
                                </span>
                                Chat Forum
                                </div>
                            </li>
                        </Link>
                    </ul>
                {/* </nav> */}
                <div
                    className="fixed bottom-10 pl-10 text-[#959190]"
                    style={{ cursor: "pointer" }}
                >
                    <div className="flex items-center text-[#D06B0D]" onClick={handleLogout}>
                        <span className="mr-3">
                            <LogOut size="20" color="#D06B0D" />
                        </span>
                        Logout
                    </div>
                </div>
            </div>
        </aside>
    </>
  )
}

export default DashboardSidebar
