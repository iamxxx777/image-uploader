import loadingStyles from '../../styles/Loading.module.scss'

const Loading = () => {
    return (
        <div className={loadingStyles.loader}>
            <div className={loadingStyles.loading}>
                <h2>Uploading...</h2>
                <div className={loadingStyles.indicator}>
                    <div className={loadingStyles.doddle}></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
