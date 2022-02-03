import { useEffect, useState } from 'react'

// Hook Debounce concernant l'input de la page tous les produits.
// Il sert à ne pas envoyer des requetes à chaque fois qu'on écrit une lettre

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  // value = valeur de l'input

  useEffect(() => {
    // requete à chaque fois que j'arrete de toucher le clavier à partir de delay
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce