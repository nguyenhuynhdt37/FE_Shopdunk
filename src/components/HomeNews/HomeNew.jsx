import NewsItems from './NewsItems'

const HomeNew = () => {
  return (
    <div className="update-news pb-60">
      <div className="title text-center text-5xl mb-5 pt-9 font-semibold">
        News
      </div>
      <div className="news-container grid grid-cols-3 gap-4.5">
        <NewsItems />
        <NewsItems />
        <NewsItems />
      </div>
    </div>
  )
}

export default HomeNew
