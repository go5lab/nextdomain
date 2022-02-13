import * as React from "react"
import { useRouter } from 'next/router'
import type { GetStaticProps, NextPage } from 'next'

import Link from "next/link"
import Head from "next/head"

import styles from "../../styles/search.module.scss"
import { useEffect, useState } from "react"

const Page: NextPage = () => {
    const router = useRouter()
    const [domainName, setDomainName] = useState<String>()

    useEffect(() => {
        if (router.asPath !== router.route) {
            setDomainName(String(router.query.search))
        }
    }, [router])
    return (
        <div>
            <main className={styles.main}>
                <p>{domainName}</p>
            </main>
        </div>
    )
}


export default Page