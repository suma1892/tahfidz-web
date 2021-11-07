import React, { useState } from "react";

import { tagIcon, closeIcon } from "public/assets/icons";

const Announcement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  return (
    <div
      className="announcement"
      style={showAnnouncement ? { top: "-100px" } : { top: "79px" }}
    >
      <div className="announcement-event">
        <img src={tagIcon} alt="tag-icon" />
        <p className="announcement-event-description">
          Free delivery min. $10 purchase | Period: 1 - 20 October 2021
        </p>
      </div>

      <img
        className="announcement-close"
        src={closeIcon}
        alt="close-icon"
        onClick={() => setShowAnnouncement(!showAnnouncement)}
      />
    </div>
  );
};

export default Announcement;
