import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function SuggestedVideo({ video }) {
  if (!video) return null; // Handle case where `video` might be undefined

  const {
    videoId,
    thumbnails,
    lengthSeconds,
    title,
    author,
    stats,
    publishedTimeText,
  } = video;

  return (
    <div>
      <Link to={`/video/${videoId}`}>
        <div className="flex mb-3">
          <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200">
            <img
              className="h-full w-full rounded-lg"
              src={thumbnails?.[0]?.url}
              alt={title} // Adding alt attribute for accessibility
            />
            {lengthSeconds && <Time time={lengthSeconds} />}
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
              {title}
            </span>
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
              {author?.title}
              {author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
              )}
            </span>
            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
              <span>{`${abbreviateNumber(stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

SuggestedVideo.propTypes = {
  video: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    thumbnails: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    lengthSeconds: PropTypes.number,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      title: PropTypes.string.isRequired,
      avatar: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ),
      badges: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
        })
      ),
    }).isRequired,
    stats: PropTypes.shape({
      views: PropTypes.number,
    }).isRequired,
    publishedTimeText: PropTypes.string.isRequired,
  }),
};

export default SuggestedVideo;
