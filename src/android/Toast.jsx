import useAndroidStore from '#android/store.js'

const Toast = () => {
    const {toast} = useAndroidStore()
    if (!toast) return null
    return <div className="aos-toast" role="status">{toast}</div>
}

export default Toast
