import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  // 设置一个 useState Hook 接收初始的 string 
  const [markDown, setMarkDown] = useState('# Markdown Text');

  return <main>
    <section className='markdown'>
      <textarea className='input' value={markDown} onChange={(e) => setMarkDown(e.target.value)}></textarea>
      <article className='result'>
      {/* 不必自行设置 markDown 的规则，只需直接调用 ReactMarkDown，会自动实行 markDown syntax */}
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </article>
    </section>
  </main>
}

export default App

// 示例：blockqoute、image 等等。
// 这些 style 都是在本 project 的 css 中规定的。
  // # markdown preview
  // - > Unordered list + Blockquote
  // - > I love you~
  // - > I'm kinda busy
  // 1. ordered list
  // 2. ordered list
  // 3. ordered list
  // ```
  // Do you know there's a tunnel under ocean boulevard
  // ```
  // - >[Google](https://www.google.com)
  // - > ![Image](https://compote.slate.com/images/8f14898f-79eb-4c81-b8e8-6f0318d78600.jpeg?crop=1560%2C1040%2Cx0%2Cy0)