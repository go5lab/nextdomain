import * as React from "react"

import Link from "next/link"
import Head from "next/head"
import EditHead from "../components/Head"

import HeaderNav from "../components/HeaderNav"
import styles from "../styles/home.module.scss"

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    const [domainName, setDomainName] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState<String>(null)
    const handleClick = () =>  {
        if (domainName == "") {
            setErrorMessage("No Value")
        }
        window.location.assign(`/search/${domainName}`)
    }
    return (
        <div>
            <EditHead
            title={appName}
            description={appDesc}
            url={"https://nextdomain.space/"} />
            <header className={styles.header}><Link href="/"><a><span className={styles.logo}>NextDomain</span></a></Link></header>
            <main className={styles.main}>
                <h1>Hello Developer</h1>
                <p>You can use NextDomain to get a domain name for free. You will need a Freenom account to use it.<br/>Please create a Freenom account in advance with your email address/password.</p>
                <p>Currently available domains (.tk .ml .ga .cf .gq)</p>
                <div className={styles.search_box}>
                    <h2>取得したいドメインを入力</h2>
                    <input className={styles.search_input} value={domainName} onChange={(e) => setDomainName(e.target.value)}></input>
                    <button className={styles.search_btn} onClick={handleClick}>Search</button>
                </div>
            </main>
        </div>
    )
}


export default Page