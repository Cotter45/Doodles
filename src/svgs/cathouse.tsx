export default function CatHouse({
  fillColors,
  onFill,
}: {
  fillColors: (string | null)[];
  onFill: (index: number) => void;
}) {
  return (
    <svg
      id="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
    >
      <g id="OBJECTS">
        <g>
          <path
            onClick={() => onFill(0)}
            fill={fillColors[0] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M230.41,40.35c0,0-0.82-9.78,2.25-10.37c2.76-0.53,6.43,7.88,6.43,7.88s8.87-4.12,10.46-2.11c1.81,2.3-4.04,9.06-4.04,9.06
			s5.79,5.14,4.63,7.73s-10.34-1.11-10.34-1.11s-4.1,8.96-7.17,8.46c-3.52-0.58-2.74-10.36-2.74-10.36s-8.84-2.42-8.59-5.25
			C221.55,41.44,230.41,40.35,230.41,40.35z"
          />
          <path
            onClick={() => onFill(1)}
            fill={fillColors[1] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M454.43,136.88c0,0-0.63-7.48,1.72-7.93c2.11-0.41,4.92,6.03,4.92,6.03s6.78-3.15,8-1.61c1.38,1.75-3.09,6.92-3.09,6.92
			s4.43,3.93,3.54,5.91c-0.89,1.98-7.9-0.85-7.9-0.85s-3.14,6.85-5.48,6.46c-2.69-0.45-2.09-7.92-2.09-7.92s-6.76-1.85-6.57-4.01
			C447.67,137.72,454.43,136.88,454.43,136.88z"
          />
          <path
            onClick={() => onFill(2)}
            fill={fillColors[2] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M38.86,272.37c0,0-0.85-10.12,2.32-10.73c2.85-0.55,6.66,8.15,6.66,8.15s9.18-4.26,10.82-2.18c1.87,2.37-4.18,9.37-4.18,9.37
			s5.99,5.32,4.79,8c-1.2,2.68-10.7-1.14-10.7-1.14s-4.24,9.27-7.42,8.75c-3.64-0.6-2.83-10.72-2.83-10.72s-9.14-2.5-8.89-5.43
			C29.69,273.5,38.86,272.37,38.86,272.37z"
          />
          <g>
            <ellipse
              onClick={() => onFill(3)}
              fill={fillColors[3] ?? "#F9F6EE"}
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              cx="85.32"
              cy="78.56"
              rx="43"
              ry="40.52"
            />
            <g>
              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M79.7,32.22c-0.24-2.8-0.48-5.6-0.72-8.4"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M106.13,37.19c2.95-3.15,5.89-6.31,8.84-9.46"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M130.67,62.66c3.21-1.37,6.42-2.74,9.63-4.11"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M51.77,43.58c-2.78-2.05-5.55-4.11-8.33-6.16"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M36.75,86.09c-3.93-0.4-7.87-0.8-11.8-1.2"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M38.65,65.69c-3.38-1.43-6.76-2.85-10.14-4.28"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M48.53,106.78c-2.74,2.08-5.48,4.16-8.21,6.23"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M65.18,120.54c-1.61,2.97-3.21,5.94-4.82,8.91"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M87.16,124.88c-0.39,4.46-0.02,8.98,1.1,13.32"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M106.32,119.38c1.67,1.86,3.35,3.71,5.02,5.57"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M122.06,106.18c3.9,1.24,7.8,2.49,11.7,3.73"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M131.2,85.64c3.25,0.3,6.5,0.6,9.75,0.9"
              />
            </g>
            <g>
              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M53.31,82.57c-2.13-3.27-1.55-8.04,1.3-10.7c2.85-2.66,7.65-2.91,10.76-0.56c3.18,2.41,4.24,6.77,4.09,10.76"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M118.05,81.01c2.13-3.27,1.55-8.04-1.3-10.7c-2.85-2.66-7.65-2.91-10.76-0.56c-3.18,2.41-4.24,6.77-4.09,10.76"
              />

              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M94.86,77.91c-5.85,1.07-11.81,1.09-18.45,0.95c-1.27,5.02,0.42,10.97,3.95,13.88c3.53,2.91,8.59,2.57,11.83-0.82
					C95.43,88.53,96.57,82.39,94.86,77.91z"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" width="500" height="500" />
            </defs>
            <clipPath id="SVGID_00000080206766773430035540000001385982785049908120_">
              <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
            </clipPath>
            <g
              style={{
                clipPath:
                  "url(#SVGID_00000080206766773430035540000001385982785049908120_)",
              }}
            >
              <g>
                <g>
                  <path
                    onClick={() => onFill(4)}
                    fill={fillColors[4] ?? "#F9F6EE"}
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M429.31,277.79c4.65-9.74,4.63-21.59-0.04-31.32c-4.67-9.73-13.91-17.15-24.43-19.61c-2.03,10.28-2.55,21.18,1.02,31.04
							C409.43,267.75,417.71,276.35,429.31,277.79z"
                  />
                  <path
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M428.95,277.67c-3.34-11.29-8.34-22.09-14.77-31.95"
                  />
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M452.01,210.32c-0.93,8.47-3.23,16.8-6.78,24.55"
                      />

                      <circle
                        onClick={() => onFill(5)}
                        fill={fillColors[5] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        cx="453.06"
                        cy="209.35"
                        r="4"
                      />
                    </g>
                    <g>
                      <path
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M467.85,207.58c-6.74,8.82-12.06,18.73-15.69,29.22"
                      />

                      <circle
                        onClick={() => onFill(6)}
                        fill={fillColors[6] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        cx="468.41"
                        cy="207.02"
                        r="4"
                      />
                    </g>
                    <g>
                      <path
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M473.98,223.12c-6.98,3.66-12.96,9.21-17.13,15.9"
                      />

                      <circle
                        onClick={() => onFill(7)}
                        fill={fillColors[7] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        cx="474.86"
                        cy="221.52"
                        r="4"
                      />
                    </g>

                    <path
                      onClick={() => onFill(8)}
                      fill={fillColors[8] ?? "#F9F6EE"}
                      style={{
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        stroke: "#000000",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                      d="
								M445.02,226.22c-1.59-11.67-18.77-11.9-14.04-1.26c4.88,10.97-4.4,20.48-1.77,30.6c2.32,8.94,15.02,12.49,23.12,6
								c5.23-4.19,8.96-11.16,13.42-11.77c3.19-0.43,6.83,1.69,9.37-1.18c5.27-5.94-1.81-12.34-10.71-11.61
								C468.52,225.39,453.33,217.13,445.02,226.22z"
                    />
                  </g>
                  <g>
                    <path
                      onClick={() => onFill(9)}
                      fill={fillColors[9] ?? "#F9F6EE"}
                      style={{
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        stroke: "#000000",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                      d="
								M447.6,260.76c-1.72-0.38-3.5,0.16-5.18,0.7c1.49-1.04,1.9-3.29,0.98-4.85c-0.92-1.56-2.97-2.31-4.72-1.84
								c-1.75,0.48-3.1,2.07-3.44,3.85c-1.02-2.31-3.1-4.12-5.53-4.81c-0.8-0.23-1.75-0.32-2.4,0.2c-0.74,0.58-0.8,1.67-0.67,2.6
								c0.37,2.65,1.83,5.12,3.96,6.74c0.71,0.54,1.44,1.03,2.17,1.47c-3.94,8.32-6.77,17.26-8.02,26.75
								c1.09,0.52,2.19,1.03,3.77,1.52c1.87-9.08,4.83-17.9,8.75-26.18c3.14,1.04,6.39,1.25,9.54,0.46c1.6-0.4,3.36-1.25,3.71-2.86
								C450.9,262.8,449.32,261.14,447.6,260.76z"
                    />
                  </g>
                </g>
                <g>
                  <path
                    onClick={() => onFill(10)}
                    fill={fillColors[10] ?? "#F9F6EE"}
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M427.07,290.39c3.52-9.22,11.88-16.43,21.53-18.55c9.64-2.11,20.26,0.94,27.94,9.1c-5.48,7.56-13.76,13.04-22.86,15.12
							C444.58,298.16,434.74,296.82,427.07,290.39z"
                  />
                  <path
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M427.29,290.54c11.05-5.63,23.24-9.04,35.61-9.95"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    onClick={() => onFill(11)}
                    fill={fillColors[11] ?? "#F9F6EE"}
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M134.84,296.21c-4.09-9.99-3.39-21.82,1.83-31.27c5.22-9.45,14.87-16.33,25.5-18.19c1.44,10.38,1.33,21.29-2.79,30.93
							C155.26,287.32,146.51,295.44,134.84,296.21z"
                  />
                  <path
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M135.21,296.11c3.98-11.08,9.58-21.58,16.57-31.06"
                  />
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M103.95,225.65c0.93,8.47,3.23,16.8,6.78,24.55"
                      />

                      <circle
                        onClick={() => onFill(12)}
                        fill={fillColors[12] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        cx="102.89"
                        cy="224.68"
                        r="4"
                      />
                    </g>
                    <g>
                      <path
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M88.1,222.91c6.74,8.82,12.06,18.73,15.69,29.22"
                      />

                      <circle
                        onClick={() => onFill(13)}
                        fill={fillColors[13] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        cx="87.54"
                        cy="222.35"
                        r="4"
                      />
                    </g>
                    <g>
                      <path
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M81.97,238.45c6.98,3.66,12.96,9.21,17.13,15.9"
                      />

                      <circle
                        onClick={() => onFill(14)}
                        fill={fillColors[14] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        cx="81.1"
                        cy="236.85"
                        r="4"
                      />
                    </g>

                    <path
                      onClick={() => onFill(15)}
                      fill={fillColors[15] ?? "#F9F6EE"}
                      style={{
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        stroke: "#000000",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                      d="
								M110.93,241.54c1.59-11.67,18.77-11.9,14.04-1.26c-4.88,10.97,4.4,20.48,1.77,30.6c-2.32,8.94-15.02,12.49-23.12,6
								c-5.23-4.19-8.96-11.16-13.42-11.77c-3.19-0.43-6.83,1.69-9.37-1.18c-5.27-5.94,1.81-12.34,10.71-11.61
								C87.43,240.72,102.62,232.45,110.93,241.54z"
                    />
                  </g>
                  <g>
                    <path
                      onClick={() => onFill(16)}
                      fill={fillColors[16] ?? "#F9F6EE"}
                      style={{
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        stroke: "#000000",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                      d="
								M108.35,276.09c1.72-0.38,3.5,0.16,5.18,0.7c-1.49-1.04-1.9-3.29-0.98-4.85c0.92-1.56,2.97-2.31,4.72-1.84
								s3.1,2.07,3.44,3.85c1.02-2.31,3.1-4.12,5.53-4.81c0.8-0.23,1.75-0.32,2.4,0.2c0.74,0.58,0.8,1.67,0.67,2.6
								c-0.37,2.65-1.83,5.12-3.96,6.74c-0.71,0.54-1.44,1.03-2.17,1.47c3.94,8.32,6.77,17.26,8.02,26.75
								c-1.09,0.52-2.19,1.03-3.77,1.52c-1.87-9.08-4.83-17.9-8.75-26.18c-3.14,1.04-6.39,1.25-9.54,0.46
								c-1.6-0.4-3.36-1.25-3.71-2.86C105.05,278.13,106.63,276.47,108.35,276.09z"
                    />
                  </g>
                </g>
                <g>
                  <path
                    onClick={() => onFill(17)}
                    fill={fillColors[17] ?? "#F9F6EE"}
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M126.57,315.3c-0.79-9.84-6.81-19.1-15.48-23.83s-19.71-4.77-29.37,0.92c3.14,8.79,9.56,16.37,17.71,20.91
							C107.58,317.84,117.41,319.33,126.57,315.3z"
                  />
                  <path
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M126.32,315.38c-9.04-8.5-19.78-15.18-31.4-19.51"
                  />
                </g>
              </g>

              <path
                onClick={() => onFill(18)}
                fill={fillColors[18] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M-20.42,355.77c12.13-11.4,33.03-11.74,45.53-0.74c-1.39-17.49,9.12-35.32,25.09-42.58c15.97-7.26,36.31-3.45,48.58,9.1
					c6.69-6.21,16.64-8.69,25.46-6.34c0.4-14.65,13.62-27.07,28.15-28.98s29.28,5.29,38.96,16.3c9.68,11.01,14.82,25.37,16.2,39.81
					c0.39,27.92,0.78,55.83,1.17,83.75c-71.99,4.67-144.52,9.43-214.25,27.94c-2.11-20.83-4.21-41.65-6.32-62.48"
              />

              <path
                onClick={() => onFill(19)}
                fill={fillColors[19] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M361.4,372.86c-8.26-8.74-8.81-23.68-1.22-33.01c7.59-9.32,22.34-11.81,32.57-5.5c-6.66-19.66,8.85-43.5,29.52-45.39
					c20.67-1.88,40.23,18.76,37.24,39.3c4.97-5.25,14.16-5.7,19.62-0.96c5.46,4.74,6.3,13.9,1.8,19.56
					c12.32-9.04,31.69-0.65,37.36,13.55c5.67,14.19,0.38,30.79-9.02,42.84c11.47,0.93,18.34,14.57,16.42,25.91
					c-1.92,11.34-9.82,20.62-17.41,29.27c-45.24-5.87-90.47-11.74-135.71-17.62C373.33,424.82,370.66,408.66,361.4,372.86z"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <defs>
              <rect
                id="SVGID_00000017498282840403299360000010010508838262816398_"
                width="500"
                height="500"
              />
            </defs>
            <clipPath id="SVGID_00000106826957387554186400000011751979902084363917_">
              <use
                xlinkHref="#SVGID_00000017498282840403299360000010010508838262816398_"
                style={{
                  overflow: "visible",
                }}
              />
            </clipPath>

            <path
              onClick={() => onFill(20)}
              fill={fillColors[20] ?? "#F9F6EE"}
              style={{
                clipPath:
                  "url(#SVGID_00000106826957387554186400000011751979902084363917_)",
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M519.62,450.78c-172.98-58.14-364.04-61.12-533.43-5.56c1.06,26.55,2.12,53.09,3.18,79.64c173.61-0.55,347.23-1.1,520.84-1.65
				C514.03,500.99,517.85,478.78,519.62,450.78z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              onClick={() => onFill(21)}
              fill={fillColors[21] ?? "#F9F6EE"}
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M163.56,342.48c0,0,10.93,95.71,13.8,99.17s73.51,5.67,87.74,5.67c14.27,0,126.71-5.33,135.26-9.47
				c8.55-4.15,15.63-93.24,15.63-93.24L271.01,276.1l-56.03,6.13L163.56,342.48z"
            />
            <path
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M259.13,447.15c0,0,8.59-90.08,7.65-106.38"
            />
            <g>
              <path
                onClick={() => onFill(22)}
                fill={fillColors[22] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M143.11,347.43c0.35-7.38,59.38-80.36,70.99-83.91c11.61-3.55,136.81-7.69,154.11-4.29c13.54,2.66,54.28,50.58,64.33,76.03
					c1.39,3.53-5.35,14.61-9.55,17.01c-5.29,3.01-149.77,13.35-160.47,6.5c-7.85-5.02-43.03-67.08-45.61-66.93
					c-2.58,0.15-54.43,66.67-57.97,67.96C155.4,361.07,142.91,351.66,143.11,347.43z"
              />
              <path
                onClick={() => onFill(23)}
                fill={fillColors[23] ?? "#F9F6EE"}
                style={{
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeMiterlimit: 10,
                }}
                d="M227.8,267.61
					c14.16,22.09,28.32,44.18,42.48,66.28c3.08,4.81,7.03,9.93,12.86,10.55c32.62,3.46,103.36-1.88,149.4-9.19"
              />
              <path
                style={{
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeMiterlimit: 10,
                }}
                d="M261.67,358.34
					c6.82-3.58,12.83-8.71,17.44-14.88"
              />
            </g>
            <g>
              <path
                style={{
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeMiterlimit: 10,
                }}
                d="M266.85,383.36
					c48.77,2.23,97.73,0.43,146.2-5.37"
              />
              <path
                style={{
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeMiterlimit: 10,
                }}
                d="M408.06,412.71
					c-48.53,4.53-97.62,7.74-146.31,5.68"
              />
            </g>
            <path
              onClick={() => onFill(24)}
              fill={fillColors[24] ?? "#F9F6EE"}
              d="M240.39,447.32c0,0,4.96-33.19,4.96-60.47c0-41.94-11.03-65.53-35.65-62.85c-23.29,2.53-27.23,29.76-25.62,55.94
				c2.03,33.06,8.35,64.79,8.35,64.79S230.71,448.01,240.39,447.32z"
            />
          </g>
          <g>
            <g>
              <path
                onClick={() => onFill(25)}
                fill={fillColors[25] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M98.45,434.3c-8.11,1.86-15.2,7.75-18.51,15.39c-1.65,3.82-2.29,8.55,0.14,11.93c2.04,2.85,5.82,4.02,9.32,3.82
					s6.81-1.56,10.05-2.91c10.62-4.4,21.23-8.8,31.85-13.21C121.11,441.57,109.03,436.31,98.45,434.3z"
              />
              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M98.45,453.17c-4.02,2.32-6.64,6.88-6.62,11.52"
              />
              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M86.64,449.82c-3.89,3.08-5.66,8.61-4.26,13.37"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(26)}
                fill={fillColors[26] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M207.83,437.77c-1.52,6.2-3.06,12.62-1.93,18.9c1.12,6.28,5.66,12.42,11.97,13.31c4.34,0.61,8.73-1.35,12.02-4.25
					c8.06-7.12,10.07-18.87,9.94-29.62c-0.01-0.77-0.08-1.65-0.71-2.11c-0.51-0.37-1.2-0.31-1.82-0.23
					C226.59,435.1,215.87,436.43,207.83,437.77z"
              />
              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M213.28,458.01c-1.42,2.8-1.76,6.13-0.92,9.16"
              />
              <path
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M226.21,457.7c1.6,2.65,2.08,5.97,1.3,8.97"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(27)}
                fill={fillColors[27] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M120.35,335.47c0,0-38.12,13.44-54.93,48.95c-8.95,18.9-7.43,43.37,8.31,53.2c13.29,8.3,38.7-50.98,38.7-50.98"
              />

              <path
                onClick={() => onFill(28)}
                fill={fillColors[28] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M79.4,402.5c0-44.17,36.66-77.69,85.37-77.69s88.69,24.1,91.93,74.95c2.93,46.1-43.21,53.26-91.93,53.26S79.4,448.7,79.4,402.5z
					"
              />
              <g>
                <g>
                  <g>
                    <ellipse
                      onClick={() => onFill(29)}
                      fill={fillColors[29] ?? "#000000"}
                      cx="120.26"
                      cy="404.28"
                      rx="9.4"
                      ry="9.6"
                    />
                    <ellipse
                      fill={"#F9F6EE"}
                      style={{}}
                      cx="116.63"
                      cy="402.04"
                      rx="2.2"
                      ry="2.24"
                    />
                  </g>
                  <g>
                    <ellipse
                      onClick={() => onFill(30)}
                      fill={fillColors[30] ?? "#000000"}
                      cx="194.37"
                      cy="404.28"
                      rx="9.4"
                      ry="9.6"
                    />
                    <ellipse
                      fill={"#F9F6EE"}
                      cx="190.74"
                      cy="402.04"
                      rx="2.2"
                      ry="2.24"
                    />
                  </g>
                  <g>
                    <path
                      onClick={() => onFill(31)}
                      fill={fillColors[31] ?? "#F9F6EE"}
                      style={{
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        stroke: "#000000",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                      d="
								M149.49,401.49c0-1.89,2.91-3.43,6.49-3.43s6.49,1.54,6.49,3.43c0,0.95-1.62,1.8-3.24,2.42c-2.13,0.81-4.38,0.81-6.51,0
								C151.1,403.29,149.49,402.43,149.49,401.49z"
                    />
                    <g>
                      <path
                        onClick={() => onFill(32)}
                        fill={fillColors[32] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M171.08,413.42c-4.22,0.48-8.55-0.3-12.3-2.32c-2.56-1.08-4.01,0.16-6.01,0.28c-2.71,1.32-5.64,2.24-8.68,2.75
									c-0.76,5.75,1.78,11.89,6.5,15.13c4.71,3.24,11.38,3.5,15.98,0.1C171.16,425.96,173.01,419.35,171.08,413.42z"
                      />

                      <path
                        onClick={() => onFill(33)}
                        fill={fillColors[33] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M140.06,412.43c2.12,2.81,5.51,4.24,8.68,3.66c3.18-0.58,6.03-3.14,7.3-6.57"
                      />

                      <path
                        onClick={() => onFill(34)}
                        fill={fillColors[34] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M174.56,412.43c-2.45,2.81-6.38,4.24-10.05,3.66c-3.67-0.58-6.98-3.14-8.46-6.57"
                      />
                    </g>
                    <g>
                      <path
                        onClick={() => onFill(35)}
                        fill={fillColors[35] ?? "#F9F6EE"}
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M168.74,425.24c-0.31-3.7-7.18-6.55-11-1.98c-0.8-1.95-3.49-3.6-6.57-2.59c-7.61,2.5-3.3,15.57,1.76,19.42
									C162.56,447.39,169.44,433.62,168.74,425.24z"
                      />

                      <path
                        style={{
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          stroke: "#000000",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="
									M157.69,422.99c-0.43,2.96-0.46,5.97-0.09,8.94"
                      />
                    </g>
                  </g>
                </g>
                <path
                  onClick={() => onFill(36)}
                  fill={fillColors[36] ?? "#F9F6EE"}
                  style={{
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeMiterlimit: 10,
                  }}
                  d="M212.987,410.196
						c7.899-0.485,14.541,3,14.835,7.785c0.294,4.785-5.872,9.057-13.771,9.542c-7.899,0.485-14.541-3-14.835-7.785
						C198.923,414.953,205.088,410.681,212.987,410.196z"
                />
                <path
                  onClick={() => onFill(37)}
                  fill={fillColors[37] ?? "#F9F6EE"}
                  style={{
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeMiterlimit: 10,
                  }}
                  d="M90.362,416.617
						c0.749-4.735,7.694-7.57,15.51-6.333s13.546,6.078,12.797,10.813c-0.749,4.735-7.694,7.57-15.51,6.333
						S89.612,421.352,90.362,416.617z"
                />
              </g>

              <path
                onClick={() => onFill(38)}
                fill={fillColors[38] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M215.41,335.47c0,0,37.73,18.32,53.22,48.95c9.43,18.65,7.43,43.37-8.31,53.2c-13.29,8.3-38.7-50.98-38.7-50.98"
              />
            </g>
          </g>
          <g>
            <path
              onClick={() => onFill(39)}
              fill={fillColors[39] ?? "#F9F6EE"}
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M326.95,208.76c5.63-8.96,16.35-13.38,26.76-15.26s21.15-1.76,31.41-4.33c10.26-2.57,20.51-8.62,24.22-18.53
				c2.69-7.19,2.15-16.43,8.36-20.96c4.03-2.94,9.9-2.56,14.06,0.18c4.17,2.74,6.74,7.46,7.76,12.35c2.7,13-5.13,26.52-16.26,33.77
				s-24.87,9.25-38.14,9.45c-7.47,0.11-14.99-0.28-22.35,1.03c-7.35,1.31-14.7,4.56-19.15,10.55
				C339.62,212.67,334.26,209.62,326.95,208.76z"
            />
            <g>
              <path
                onClick={() => onFill(40)}
                fill={fillColors[40] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M231.09,272.85c-11.13,5.03-26.23,12.05-36.75,15.99c-4.57,1.71-10.08,3.09-14.01,0.19c-3.05-2.25-4.05-6.52-3.38-10.26
					c0.67-3.74,2.7-7.06,4.76-10.25c9.3-14.41,19.85-28.01,32.07-46.04c21.99,1.6,43.32-6.64,64.3-13.41
					c20.98-6.77,43.41-10.5,64.77-5.01c19.23,4.95,64.32,53.42,55.34,68.8c-5.94,10.18-38.14,1.5-56.22-10.95
					C317.22,285,261.14,284.4,231.09,272.85z"
              />
              <g>
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M191.33,281.5c-3.2,1.42-5.36,4.91-5.2,8.41"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M183.01,276.92c-2.87,2.3-4.61,5.94-4.61,9.62"
                />
              </g>
              <g>
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M397.51,273.68c-2.41-0.19-4.67-1.71-5.74-3.87"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M389.52,277.34c-2.8-0.5-5.29-2.44-6.47-5.02"
                />
              </g>
            </g>
            <g>
              <path
                onClick={() => onFill(41)}
                fill={fillColors[41] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M201.17,214.23c0,0,16,17.6,50.48,17.6s64.84-11.23,73.16-31.15L201.17,214.23z"
              />

              <circle
                onClick={() => onFill(42)}
                fill={fillColors[42] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                cx="237.97"
                cy="240.67"
                r="12.74"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(43)}
                fill={fillColors[43] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M257.24,267.48c0,0-3.83,48.58,13.42,46.59c17.59-2.03,30.89-50.53,30.89-50.53"
              />
              <g>
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M274.45,312.98c-1.2-3.2-1.06-6.88,0.37-9.99"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M266.91,313.65c-2.19-3.27-2.76-7.57-1.5-11.3"
                />
              </g>
            </g>
            <g>
              <g>
                <g>
                  <path
                    onClick={() => onFill(44)}
                    fill={fillColors[44] ?? "#F9F6EE"}
                    style={{
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="M290.53,216.65
							c45.04-7.22,87.2-37.7,49.32-97.55c-0.67-65.04-24.1-90.8-76.67-38.17c-12.22-0.9-25.57,0.11-37.62,2.88
							c-64.71-41.58-78.83-14.94-71.83,51.07C116.18,235.26,224.5,227.24,290.53,216.65z"
                  />
                </g>
                <g>
                  <path
                    onClick={() => onFill(45)}
                    fill={fillColors[45] ?? "#F9F6EE"}
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M321.79,95.26c0,0-2.84-27.33-11.4-28.23c-8.56-0.9-23.76,13.45-23.76,13.45S306.98,84.52,321.79,95.26z"
                  />

                  <path
                    onClick={() => onFill(46)}
                    fill={fillColors[46] ?? "#F9F6EE"}
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                    }}
                    d="
							M166.22,113.37c0,0-2.61-25.88,5.65-29.32c8.26-3.44,25.71,7.9,25.71,7.9S176.82,103.54,166.22,113.37z"
                  />
                </g>
              </g>
              <g>
                <path
                  style={{
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeMiterlimit: 10,
                  }}
                  d="M150.17,175.8
						c-12.07-3.04-25.06-2.33-36.73,2"
                />
                <path
                  style={{
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeMiterlimit: 10,
                  }}
                  d="M156.19,195.8
						c-11.47,3.01-22.08,9.24-30.3,17.79"
                />
              </g>
              <g>
                <path
                  style={{
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeMiterlimit: 10,
                  }}
                  d="M348.57,153.41
						c11.93-5.81,25.83-7.48,38.79-4.64"
                />
                <path
                  style={{
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeMiterlimit: 10,
                  }}
                  d="M350.62,173.57
						c12.19-0.49,24.48,2.09,35.44,7.43"
                />
              </g>
              <g>
                <g>
                  <g>
                    <path
                      onClick={() => onFill(47)}
                      fill={fillColors[47] ?? "#000000"}
                      d="M244.64,151.55c-0.15-1.54,1.92-2.99,4.6-3.25c2.69-0.26,4.99,0.79,5.13,2.32c0.09,0.99-1.83,2.05-3.22,2.68
								c-0.89,0.41-1.9,0.5-2.85,0.27C246.83,153.22,244.74,152.54,244.64,151.55z"
                    />
                  </g>
                  <g>
                    <path
                      onClick={() => onFill(48)}
                      fill={fillColors[48] ?? "#F9F6EE"}
                      style={{
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        stroke: "#000000",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                      d="
								M237.27,160.21c0,0,0.55,27.98,13.72,27.55c13.24-0.43,11.9-28.39,11.9-28.39"
                    />
                    <g>
                      <path
                        onClick={() => onFill(49)}
                        fill={fillColors[49] ?? "#F9F6EE"}
                        style={{
                          stroke: "#000000",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="M235.49,159.11
									c2.02,2.26,4.84,3.43,7.56,3.14s5.29-2.04,6.9-4.7"
                      />
                      <path
                        onClick={() => onFill(50)}
                        fill={fillColors[50] ?? "#F9F6EE"}
                        style={{
                          stroke: "#000000",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="M264.48,158.17
									c-1.87,2.39-4.6,3.74-7.33,3.63c-2.73-0.12-5.41-1.7-7.19-4.24"
                      />
                    </g>

                    <path
                      onClick={() => onFill(51)}
                      fill={fillColors[51] ?? "#F9F6EE"}
                      style={{
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        stroke: "#000000",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                      d="
								M240.56,177.88c6.09-3.94,13.78-4.07,20.03-0.33"
                    />
                  </g>
                  <g>
                    <circle
                      onClick={() => onFill(52)}
                      fill={fillColors[52] ?? "#000000"}
                      style={{ stroke: "#000000", strokeMiterlimit: 10 }}
                      cx="205.32"
                      cy="155.54"
                      r="8.68"
                    />
                    <path
                      fill="#F9F6EE"
                      d="M202.819,149.996c1.857-0.28,3.586,0.981,3.863,2.816c0.277,1.835-1.005,3.549-2.861,3.829
								c-1.857,0.28-3.586-0.981-3.863-2.816C199.681,151.99,200.962,150.276,202.819,149.996z"
                    />
                  </g>
                  <g>
                    <circle
                      onClick={() => onFill(53)}
                      fill={fillColors[53] ?? "#000000"}
                      style={{ stroke: "#000000", strokeMiterlimit: 10 }}
                      cx="297.01"
                      cy="151.07"
                      r="8.68"
                    />
                    <path
                      fill="#F9F6EE"
                      d="M294.497,145.539c1.857-0.28,3.586,0.981,3.862,2.816c0.276,1.835-1.004,3.549-2.861,3.829
								c-1.857,0.28-3.586-0.981-3.863-2.816C291.359,147.533,292.64,145.818,294.497,145.539z"
                    />
                  </g>
                </g>
                <g>
                  <ellipse
                    onClick={() => onFill(54)}
                    fill={fillColors[54] ?? "#F9F6EE"}
                    style={{
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeMiterlimit: 10,
                    }}
                    cx="314.05"
                    cy="165.33"
                    rx="11.5"
                    ry="6.5"
                  />

                  <ellipse
                    onClick={() => onFill(55)}
                    fill={fillColors[55] ?? "#F9F6EE"}
                    style={{
                      strokeLinecap: "round",
                      stroke: "#000000",
                      strokeMiterlimit: 10,
                    }}
                    cx="184.64"
                    cy="165.33"
                    rx="11.5"
                    ry="6.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <g>
            <path
              onClick={() => onFill(56)}
              fill={fillColors[56] ?? "#F9F6EE"}
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M62.48,211.22c-4.98-3.55-10.1-7.18-16.02-9.24c-5.92-2.07-12.91-2.26-17,0.82c-2.66,2.01-3.76,5.08-4.65,8.07
				c-0.52,1.73-1,3.51-0.83,5.38s1.08,3.88,2.89,5.27c2.59,2,6.3,2.29,9.52,2.14c7.1-0.33,15.26-1.63,20.7-4.79
				C58.96,216.21,60.04,213.4,62.48,211.22z"
            />
            <path
              onClick={() => onFill(57)}
              fill={fillColors[57] ?? "#F9F6EE"}
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M74.16,205.22c7.17-6.71,13.26-14.37,18.06-22.71c1.58-2.75,3.05-5.75,2.62-8.95c-0.22-1.64-1.15-3.44-2.88-4.04
				c-1.23-0.43-2.6-0.13-3.63,0.5c-1.03,0.63-1.77,1.56-2.48,2.48c-3.99,5.21-7.39,10.93-12.64,15.1c-3.29,2.61-7.32,4.63-9.56,8.06
				c-0.85,1.3-1.34,3.12-0.19,4.36c0.53,0.58,1.31,0.9,2.06,1.2C68.71,202.49,71.91,203.78,74.16,205.22z"
            />
            <path
              onClick={() => onFill(58)}
              fill={fillColors[58] ?? "#F9F6EE"}
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M68.75,205.08c4.28-10.41,6.06-21.79,5.25-33.41c-0.33-4.71-1.83-10.39-7.21-12.92c-3.98-1.86-8.71-1.11-11.74,0.92
				c-3.03,2.03-4.7,5.1-6.2,8.12c-1.49,3.03-2.93,6.16-5.64,8.47c-3.92,3.35-10.29,4.76-12.88,8.96c-3.28,5.31,1.28,13,7.99,17.26
				c6.71,4.26,16.48,7.1,24.46,9.39C66.16,209.36,68.4,205.93,68.75,205.08z"
            />
            <g>
              <path
                onClick={() => onFill(59)}
                fill={fillColors[59] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M66.94,206.24c-4,3.64-7.91,7.49-10.81,12.13c-0.63,1.01-1.23,2.1-1.32,3.29s0.49,2.47,1.55,2.77c1.05,0.3,2.15-0.41,3.06-1.12
					c4.67-3.69,8.49-8.61,10.99-14.16C69.44,208.24,68.47,207.32,66.94,206.24z"
              />

              <ellipse
                onClick={() => onFill(60)}
                fill={fillColors[60] ?? "#F9F6EE"}
                transform="matrix(0.624 -0.7815 0.7815 0.624 -132.0813 133.169)"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                cx="72.33"
                cy="203.825"
                rx="6.47"
                ry="7.93"
              />
            </g>
            <path
              onClick={() => onFill(61)}
              fill={fillColors[61] ?? "#F9F6EE"}
              style={{
                strokeLinecap: "round",
                stroke: "#000000",
                strokeMiterlimit: 10,
              }}
              d="M73.07,168.13
				c-2.92-1.66-6.75-0.81-9.64,1.2c-2.89,2-5.04,4.99-7.13,7.91s-4.23,5.91-7.11,7.93c-1.97,1.39-4.21,2.25-6.37,3.25
				s-4.32,2.17-5.94,4.01c-1.61,1.84-2.6,4.47-1.98,6.81"
            />
            <path
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="M37.75,202.35
				c-1.25,2.01-2.53,4.09-2.94,6.43s0.29,5,2.22,6.08c-3.1,1.45-5.06,5.33-4.45,8.76"
            />
            <path
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="M36.99,215.01
				c6.74,1.28,13.68,1.59,20.59,0.91"
            />
            <path
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="M65.9,198.23
				c-4.61-5.23-8.72-10.97-12.23-17.1"
            />
            <path
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="M65.44,207.81
				c-8.71-4.43-16.31-11.12-21.99-19.34"
            />
            <path
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="M94.17,171.76
				c-2.46-0.43-4.99,1.06-6.79,3.02c-1.8,1.96-3.06,4.37-4.61,6.54c-2.49,3.47-5.76,6.31-9.44,8.21"
            />
            <path
              style={{
                strokeWidth: 2,
                strokeLinecap: "round",
                stroke: "#000000",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="M80.14,184.51
				c-0.85,4.61-2.6,9.07-5.12,13.01"
            />
          </g>
          <g>
            <g>
              <g>
                <path
                  onClick={() => onFill(62)}
                  fill={fillColors[62] ?? "#F9F6EE"}
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M406.63,86.22c4.07,0.69,8.23,0.11,12.32-0.45c4.09-0.56,8.26-1.09,12.31-0.31c4.05,0.78,8.02,3.12,9.71,6.89
						c1.38,3.09,1.06,6.66,0.38,9.98c-0.79,3.82-2.18,7.79-5.27,10.18c-4.29,3.31-10.69,2.47-15.21-0.5
						c-4.53-2.97-7.61-7.64-11.16-11.97C408.69,95.39,407.66,90.73,406.63,86.22z"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M429.42,89.46
						c0.92,2.28,1.64,4.73,1.42,7.18s-1.56,4.92-3.99,6.17c1.12,1.73,1.52,3.92,1.1,5.94c-0.43,2.02-1.67,3.85-3.4,4.99"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M412.9,98.81
						c4.22,2.63,9.2,4.04,14.17,4.02"
                />
              </g>
              <g>
                <path
                  onClick={() => onFill(63)}
                  fill={fillColors[63] ?? "#F9F6EE"}
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M400.42,78.11c0.29-9.37,0.74-18.83,3.19-27.88c2.45-9.05,7.08-17.77,14.44-23.57c3.34-2.64,7.52-4.69,11.74-4.06
						c4.74,0.71,8.46,4.74,10.12,9.24s1.62,9.42,1.42,14.21c-0.2,4.79-0.53,9.66,0.61,14.32c0.87,3.59,2.59,6.93,3.65,10.47
						c1.06,3.54,1.41,7.55-0.37,10.79c-1.79,3.25-5.36,5.1-8.9,6.22c-9.28,2.94-19.28,2.08-29.05,1.3
						C404.81,85.29,402.35,81.42,400.42,78.11z"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M415.83,29.06
						c5.98,5.35,8.69,14.11,6.68,22.95c3.16,4.09,6.37,8.27,8.11,13.13c1.73,4.87,1.78,10.63-1.17,15.32
						c2.32,1.94,3.37,5.27,2.6,8.2"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M405.26,67.32
						c3.8-6.81,9.95-12.28,17.16-15.25"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M405.16,82.41
						c8.06,1.52,16.54,0.8,24.23-2.08"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  onClick={() => onFill(64)}
                  fill={fillColors[64] ?? "#F9F6EE"}
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M401.68,84.15c-2.07,2.78-4.93,4.59-7.74,6.38c-2.8,1.79-5.65,3.65-7.66,6.49c-2.01,2.85-3.07,6.9-1.92,10.84
						c0.94,3.23,3.2,5.92,5.53,8.21c2.69,2.64,5.82,5.06,9.08,5.28c4.51,0.3,7.92-3.87,8.95-8.73s0.21-10.29-0.13-15.7
						C405.73,92.62,403.66,88.33,401.68,84.15z"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M389.71,99.21
						c0.76,2.34,1.73,4.69,3.28,6.53c1.55,1.84,3.79,3.09,5.98,2.77c0.32,2,1.33,3.97,2.76,5.36c1.42,1.39,3.24,2.17,4.94,2.14"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M405.14,97.67
						c-1.05,4.42-3.25,8.27-6.28,10.98"
                />
              </g>
              <g>
                <path
                  onClick={() => onFill(65)}
                  fill={fillColors[65] ?? "#F9F6EE"}
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M400.78,74.24c-5.58-7.36-11.31-14.7-18.03-20.61c-6.71-5.92-14.56-10.37-22.38-11c-3.55-0.29-7.28,0.36-9.47,3.17
						c-2.47,3.16-2.4,8.43-0.82,12.95c1.59,4.52,4.45,8.44,7.34,12.18c2.88,3.73,5.89,7.46,7.89,11.81
						c1.54,3.36,2.43,6.97,3.83,10.4c1.4,3.42,3.5,6.83,6.45,8.46c2.96,1.63,6.2,1.16,9,0.12c7.33-2.72,12.91-8.89,18.4-14.86
						C402.25,82.4,401.51,77.95,400.78,74.24z"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M363.1,43.33
						c-0.54,7.57,2.87,16.07,9.19,22.07c0.44,5.01,0.9,10.12,2.66,14.97c1.76,4.85,5.06,9.5,9.55,11.64c-0.28,2.83,1,6.07,3.15,8"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M391.61,68.24
						c-6.24-3.39-13.13-4.4-19.22-2.83"
                />
                <path
                  style={{
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "#000000",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="M400.38,80.28
						c-4.02,5.64-9.59,9.69-15.92,11.59"
                />
              </g>
            </g>
            <g>
              <path
                onClick={() => onFill(66)}
                fill={fillColors[66] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M401.67,77.34c4.2,5.9,8.22,12.05,10.57,18.91c0.51,1.49,0.95,3.08,0.65,4.63c-0.3,1.55-1.54,3.02-3.12,3.07
					c-1.55,0.05-2.81-1.19-3.8-2.39c-5.11-6.18-8.61-13.68-10.09-21.56C397.54,79.13,399.19,78.26,401.67,77.34z"
              />

              <path
                onClick={() => onFill(67)}
                fill={fillColors[67] ?? "#F9F6EE"}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  stroke: "#000000",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M391.764,64.689c5.681-2.434,11.799-0.876,13.665,3.48c1.866,4.356-1.226,9.86-6.907,12.293
					c-5.681,2.434-11.799,0.876-13.665-3.48C382.991,72.627,386.084,67.123,391.764,64.689z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            onClick={() => onFill(68)}
            fill={fillColors[68] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M397.93,442.56c3.9-2.85,8.59-4.81,8.05-7.74c-0.75-4.09-12.54-1.63-14.71,1.88c-0.17-3.36,3.71-11.25-0.3-13.03
			c-4.88-2.17-9.49,6.43-8.65,12.23c-3.13-5.36-11.65-7.98-13.05-5.06c-1.49,3.1,3.62,7.49,4.39,11.96"
          />
          <path
            onClick={() => onFill(69)}
            fill={fillColors[69] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M52.98,479.74c3-3.78,7.01-6.91,5.72-9.59c-1.81-3.75-12.52,1.75-13.69,5.71c-1.06-3.19,0.6-11.84-3.74-12.49
			c-5.28-0.8-7.45,8.71-5.1,14.08c-4.44-4.34-13.35-4.61-13.93-1.42c-0.61,3.38,5.47,6.26,7.4,10.37"
          />
          <path
            onClick={() => onFill(70)}
            fill={fillColors[70] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M300.53,446.8c3.31-3.22,7.48-5.66,6.63-8.43c-1.2-3.87-11.96-0.12-13.58,3.53c-0.57-3.23,2.13-11.33-1.84-12.59
			c-4.84-1.53-8.14,7.33-6.65,12.85c-3.58-4.83-11.89-6.37-12.85-3.38c-1.02,3.18,4.29,6.83,5.56,11.07"
          />
          <path
            onClick={() => onFill(80)}
            fill={fillColors[80] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M451.62,483.75c-1.59-2.39-6.51-6.95-4.98-9.35c1.91-2.99,9.52-0.36,12.57,4.33c-6.95-15.64,7.07-20.28,10.82-0.77
			c2.09-4.82,8.91-9.29,11.4-5.8c1.67,2.33-2.17,7.77-5.3,14.6"
          />
          <path
            onClick={() => onFill(81)}
            fill={fillColors[81] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M434.33,428.23c-1.14-1.95-4.87-5.86-3.45-7.54c1.77-2.08,7.85,0.62,10.03,4.46c-4.63-12.48,7.22-14.66,8.95,0.44
			c2.05-3.44,7.97-6.18,9.77-3.31c1.21,1.92-2.32,5.67-5.37,10.53"
          />
          <path
            onClick={() => onFill(82)}
            fill={fillColors[82] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M241.27,490.54c-1.79-2.24-7.08-6.37-5.76-8.89c1.64-3.14,9.45-1.18,12.89,3.24c-8.26-14.99,5.32-20.81,10.72-1.69
			c1.67-4.98,8.08-10.01,10.87-6.75c1.86,2.18-1.5,7.93-4.04,15"
          />
          <path
            onClick={() => onFill(83)}
            fill={fillColors[83] ?? "#F9F6EE"}
            style={{
              strokeWidth: 2,
              strokeLinecap: "round",
              stroke: "#000000",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M19.34,437.57c-2.44-1.51-8.82-3.6-8.43-6.42c0.48-3.51,8.5-4.3,13.22-1.31c-12.84-11.32-2.04-21.39,9.51-5.21
			c-0.11-5.25,4.22-12.16,7.94-10.03c2.49,1.42,1.27,7.97,1.27,15.48"
          />
        </g>
      </g>
    </svg>
  );
}
