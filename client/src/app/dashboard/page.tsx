"use client";


import CardPopularProducts from "@/app/dashboard/CardPopularProducts";
import CardPurchaseSummary from "@/app/dashboard/CardPurchaseSummary";
import CardSalesSummary from "@/app/dashboard/cardSalesSummary"
import CardExpenseSummary from "@/app/dashboard/CardExpenseSummary";
import {Package, TrendingUp} from "lucide-react";
import StatCard from "@/app/dashboard/StatCard";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
            <CardPopularProducts/>
            <CardSalesSummary/>
            <CardPurchaseSummary/>
            <CardExpenseSummary/>
            <StatCard title="Customer & Expenses"
                      primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
                      dateRange="22 - 29 October 2023"
                      details={[
                          {
                              title: "Customer Growth", amount: "175.00",
                              changePercentage: 131, IconComponent: TrendingUp
                          },
                          {
                              title: "Expenses", amount: "10.00",
                              changePercentage: -56, IconComponent: TrendingUp
                          },

                      ]}/>
            <div className="row-span-3 xl:row-span-6 bg-gray-500"/>
            <div className="row-span-3 xl:row-span-6 bg-gray-500"/>
            <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500"/>
            <div className="row-span-3 bg-gray-500"/>

        </div>
    )
}

export default Dashboard