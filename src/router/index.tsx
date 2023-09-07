import { Route, Routes } from 'react-router-dom'
import Home from '../view/home'
import Tree from '../view/tree'
import Editor from '../view/editor'
const router = () => {
  return (
    <>
      <Routes>
        <Route path="/editor" element={<Editor />}></Route>
        <Route path="/tree" index element={<Tree />}></Route>
      </Routes>
    </>
  )
}
export default router