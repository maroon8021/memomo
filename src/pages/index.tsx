import * as React from "react"
import { useState, useEffect, ChangeEvent } from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import axios from "axios"
import Layout from "@s/components/common/layout"
import Header from "@s/components/common/header"

/* Styles */
const blueColor = "#209cee"
const blackColor = "#363636"

const section = css({
  padding: "3rem 1.5rem",
})

const field = css({
  marginBottom: "0.75rem",
})

const control = css({
  boxSizing: "border-box",
  clear: "both",
  fontSize: "1rem",
  position: "relative",
  textAlign: "left",
})

const inputInfo = css({
  fontSize: "1rem",
  height: "2.25em",
  lineHeight: 1.5,
  padding: "0.2rem 0.5rem",
  border: "1px solid transparent",
  "-webkit-appearance": "none",
  backgroundColor: "white",
  borderRadius: "4px",
  color: blackColor,
  boxShadow: "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
  maxWidth: "100%",
  width: "100%",
  borderColor: blueColor,
  ":focus": {
    boxShadow: "0 0 0 0.125em rgba(32, 156, 238, 0.25)",
    outline: "none",
  },
})

const container = css({
  flexGrow: 1,
  margin: "0 auto",
  position: "relative",
  width: "auto",
})

const linkCard = css({
  margin: "1rem 0",
})

const linkCardContent = css({
  border: "solid 1px #ebebeb",
  borderRadius: "3px",
  display: "block",
  maxHeight: "20vh",
  overflow: "hidden",
  padding: "1rem",
  textDecoration: "none",
  color: blackColor,
  ":hover": {
    backgroundColor: "#f5f5f5",
    transition: "all 0.4s ease",
  },
  "& .is-highlight": {
    backgroundColor: "yellow",
    color: blackColor,
  },
})

const linkCardTitle = css({
  color: blackColor,
  fontSize: "1.5rem",
  fontWeight: 600,
  lineHeight: 1.125,
  marginTop: 0,
  marginBottom: "1.5rem",
})

const description = css({
  "& a": {
    color: blueColor,
  },
})

interface articleData {
  text: string
  title: string
  path: string
  [key: string]: string
}

let allData: articleData[] = []

const IndexPage: React.FC = (): React.ReactElement => {
  const [resultList, setResult] = useState<articleData[]>([])

  /**
   * https://qiita.com/hikonaz/items/5d2a526a217e05162a0a
   * @param e
   */
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let inputtedValue = e.target.value
    // eslint-disable-next-line no-console
    console.log(inputtedValue)
    let targetList: articleData[] = []
    const targetText = new RegExp(inputtedValue, "g")

    if (inputtedValue == null || inputtedValue === "") {
      targetList = allData
    } else {
      allData.forEach((articleData: articleData) => {
        if (
          articleData.text.indexOf(inputtedValue) !== -1 ||
          articleData.title.indexOf(inputtedValue) !== -1
        ) {
          let selectedData = Object.assign({}, articleData)
          Object.entries(selectedData).forEach(([key, value]) => {
            if (key === "title" || key === "text") {
              selectedData[key] = selectedData[key].replace(
                targetText,
                `<span class='is-highlight'>${inputtedValue}</span>`
              )
            }
          })
          targetList.push(selectedData)
        }
      })
    }

    setResult(targetList)
  }

  useEffect(() => {
    axios
      .get("/data.json")
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res)
        allData = res.data
        setResult(allData)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }, [])

  return (
    <Layout>
      <Header />
      <section css={section}>
        <div css={field}>
          <div css={control}>
            <input
              onChange={onChangeInput}
              css={inputInfo}
              type="text"
              placeholder="Input text you want to search"
              autoFocus
            />
          </div>
        </div>
        <div css={container}>
          {resultList.map((node: articleData) => (
            <div key={node.path} css={linkCard}>
              <Link to={node.path} css={linkCardContent}>
                <h3
                  css={linkCardTitle}
                  dangerouslySetInnerHTML={{ __html: node.title }}
                />
                <p
                  css={description}
                  dangerouslySetInnerHTML={{ __html: node.text }}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
