import * as React from "react"

import Link from "next/link"
import Head from "next/head"
import EditHead from "../../components/Head"

import HeaderNav from "../../components/HeaderNav"

import styles from "../../styles/dashboard.module.scss"

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <EditHead
            title={"Dashboard"}
            description={appDesc}
            url={"https://cloudbase.host/dashboard/"} />
            <HeaderNav />
            <main className={styles.main}>
            </main>
        </div>
    )
}


export default Page