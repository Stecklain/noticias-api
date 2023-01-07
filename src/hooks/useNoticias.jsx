import { useContext } from 'react'
import NoticiasContext from '../context/NoticiasProvider'

const useNoticias = () => {
  return useContext(NoticiasContext)
}

export default useNoticias;
