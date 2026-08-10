"use client";

import { useEffect, useRef } from "react";

export default function BookingWidget() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.docplanner.com/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={hostRef} className="dt-widget-host">
      <a
        className="zl-url"
        href="https://www.doktortakvimi.com/melis-cakan/dis-hekimi/sakarya"
        rel="nofollow"
        data-zlw-doctor="melis-cakan"
        data-zlw-type="big"
        data-zlw-opinion="true"
        data-zlw-hide-branding="true"
      >
        Melis Çakan - DoktorTakvimi.com
      </a>
    </div>
  );
}
