
## Hooks

###### Які плюси useState в порівнянні з setState ?
 - Використання функціональних компонент. Хуки по суті дозволяють використовувати стейт в функціональних компонентах і не тільки
 - Можна мати кілька стейтів в одній компоненті. Наприклад: `const [test, setTest] = useState(false)`

######  useEffect
useEffect замінює lifecycle методи. 
Ось як виглядає код:

    1. useEffect(() => {}, []) - componentDidMount -- тільки один раз
    
    2. useEffect(() => {}, [variable]) - на зміну variable
    
    3. useEffect(() => {}) - componentDidUpdate -- на кожний рендер
    
    4.  useEffect(() => {
            return () => {};
        }, []) - componentDidUnmount
        
Щоб зробити shouldComponentUpdate ми можемо використати React.Memo. (List/index.js)
    
    export default React.memo(ListModal, (prevProps, nextProps) => {
        return nextProps.visible === prevProps.visible
    });
    
    // true - щоб не ререндерити, false - ререндер

######  Custom Hooks
Custom Hook - це просто функція, яка повертає масив з двох елементів [isLoading, fetchedData] (наприклад два об'єкта)

Ще є useReducer, useContext



