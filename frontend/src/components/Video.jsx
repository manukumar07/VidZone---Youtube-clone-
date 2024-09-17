import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  if (!video) return null;

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
        <div className="flex flex-col">
          {/* thumbnail & duration */}
          <div className="relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={thumbnails?.[0]?.url}
              alt={title}
            />
            {lengthSeconds && <Time time={lengthSeconds} />}
          </div>
          {/* channel logo & title */}
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={author?.avatar?.[0]?.url}
                  alt={author?.title}
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">{title}</span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {author?.title}
                {author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(stats?.views, 2)} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Video.propTypes = {
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

export default Video;
