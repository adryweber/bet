import React from "react"
import data from "../static/data.json"


const IndexPage = () => (
  <div>
    <p>Тестовое подключения данных.</p>
    {JSON.stringify(data)}
  </div>
)

export default IndexPage
