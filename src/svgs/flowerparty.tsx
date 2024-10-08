export default function FlowerParty({
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
      style={{
        maxHeight: "100dvh",
      }}
    >
      <g id="OBJECTS">
        <g>
          <g>
            <path
              onClick={() => onFill(0)}
              fill={fillColors[0] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M163.565,26.592c0,0,14.539,29.953,16.217,74.977c0,0-9.371-37.31,10.487-70.31"
            />
            <g>
              <path
                onClick={() => onFill(1)}
                fill={fillColors[1] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M166.479,33.562c0,0-12.548-16.303-9.951-21.303C159.126,7.258,165.599,16.531,166.479,33.562z"
              />

              <path
                onClick={() => onFill(2)}
                fill={fillColors[2] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M185.051,41.485c0,0,3.162-23.226,9.118-25.893C200.126,12.925,199.311,25.531,185.051,41.485z"
              />
            </g>
          </g>
          <g>
            <path
              onClick={() => onFill(3)}
              fill={fillColors[3] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M450.452,218.324c0,0-5.322,32.867-29.831,70.672c0,0,13.78-35.916,48.998-51.503"
            />
            <g>
              <path
                onClick={() => onFill(4)}
                fill={fillColors[4] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M448.83,225.702c0,0-0.896-20.553,4.104-23.152C457.933,199.952,457.899,211.261,448.83,225.702z"
              />

              <path
                onClick={() => onFill(5)}
                fill={fillColors[5] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M459.472,242.862c0,0,15.939-17.188,22.345-15.946C488.224,228.158,480.311,238.005,459.472,242.862z"
              />
            </g>
          </g>
          <g>
            <path
              onClick={() => onFill(6)}
              fill={fillColors[6] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M420.343,41.986c0,0-20.216,26.455-30.831,70.242c0,0,16.617-34.694,3.734-70.99"
            />
            <g>
              <path
                onClick={() => onFill(7)}
                fill={fillColors[7] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M416.098,48.235c0,0,15.545-13.476,13.996-18.893C428.545,23.925,420.354,31.722,416.098,48.235z"
              />

              <path
                onClick={() => onFill(8)}
                fill={fillColors[8] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M396.319,52.299c0,0,1.53-23.391-3.776-27.191C387.238,21.308,385.525,33.824,396.319,52.299z"
              />
            </g>
          </g>
          <g>
            <path
              onClick={() => onFill(186)}
              fill={fillColors[186] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M33.664,382.09c0,0,32.764-5.922,70.115-31.118c0,0-35.658,14.434-50.599,49.932"
            />
            <g>
              <path
                onClick={() => onFill(152)}
                fill={fillColors[152] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M41.012,380.333c0,0-20.566-0.52-23.073,4.527C15.433,389.906,26.739,389.665,41.012,380.333z"
              />

              <path
                onClick={() => onFill(153)}
                fill={fillColors[153] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M58.363,390.66c0,0-16.893,16.25-15.534,22.633C44.187,419.676,53.888,411.583,58.363,390.66z"
              />
            </g>
          </g>
        </g>
        <path
          onClick={() => onFill(154)}
          fill={fillColors[154] ?? "#F9F6EE"}
          style={{
            stroke: "#000000",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          d="
		M308.521,143.574c0,0,7.535-44.963,37.373-91.965"
        />
        <path
          onClick={() => onFill(155)}
          fill={fillColors[155] ?? "#F9F6EE"}
          style={{
            stroke: "#000000",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          d="
		M79.035,187.295c0,0-7.535-44.963-37.373-91.965"
        />
        <g>
          <g>
            <path
              onClick={() => onFill(9)}
              fill={fillColors[9] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M344.32,54.123c0,0-4.164-14.259,5.466-21.544C359.416,25.295,373.512,44.781,344.32,54.123z"
            />
            <g>
              <path
                onClick={() => onFill(10)}
                fill={fillColors[10] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M333.562,73.178c0,0-9.416-2.761-14.653-12.939c-5.237-10.178,5.543-19.21,13.119-13.091S336.338,67.62,333.562,73.178z"
              />

              <path
                onClick={() => onFill(11)}
                fill={fillColors[11] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M333.562,73.178c0,0,7.549-11.995,17.87-10.88c13.811,1.492,13.915,15,3.008,18.325
					C343.534,83.948,333.562,73.178,333.562,73.178z"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(12)}
                fill={fillColors[12] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M322.424,97.353c0,0-9.594-2.062-15.565-11.827c-5.971-9.765,4.117-19.566,12.121-14.02
					C326.985,77.05,324.784,91.606,322.424,97.353z"
              />

              <path
                onClick={() => onFill(13)}
                fill={fillColors[13] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M322.424,97.353c0,0,6.647-12.517,17.022-12.163c13.884,0.473,14.98,13.937,4.347,18.055
					C333.16,107.361,322.424,97.353,322.424,97.353z"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(14)}
                fill={fillColors[14] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M313.761,120.509c0,0-9.771-0.908-16.859-9.895c-7.089-8.987,1.763-19.916,10.37-15.361
					C315.878,99.809,315.422,114.523,313.761,120.509z"
              />

              <path
                onClick={() => onFill(15)}
                fill={fillColors[15] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M313.761,120.509c0,0,5.113-13.218,15.456-14.099c13.842-1.179,16.529,12.059,6.461,17.41
					C325.61,129.172,313.761,120.509,313.761,120.509z"
              />
            </g>
          </g>
          <g>
            <path
              onClick={() => onFill(16)}
              fill={fillColors[16] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M43.236,97.843c0,0,4.164-14.259-5.466-21.544C28.14,69.015,14.044,88.502,43.236,97.843z"
            />
            <g>
              <path
                onClick={() => onFill(17)}
                fill={fillColors[17] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M53.994,116.898c0,0,9.416-2.761,14.653-12.939c5.237-10.178-5.543-19.21-13.119-13.091
					C47.953,96.986,51.218,111.341,53.994,116.898z"
              />

              <path
                onClick={() => onFill(18)}
                fill={fillColors[18] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M53.994,116.898c0,0-7.549-11.995-17.87-10.88c-13.811,1.492-13.915,15-3.008,18.325
					C44.022,127.669,53.994,116.898,53.994,116.898z"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(19)}
                fill={fillColors[19] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M65.132,141.073c0,0,9.594-2.062,15.565-11.827c5.971-9.765-4.117-19.565-12.121-14.02
					C60.571,120.771,62.772,135.326,65.132,141.073z"
              />

              <path
                onClick={() => onFill(20)}
                fill={fillColors[20] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M65.132,141.073c0,0-6.647-12.517-17.022-12.163c-13.884,0.473-14.98,13.937-4.347,18.055
					C54.396,151.081,65.132,141.073,65.132,141.073z"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(21)}
                fill={fillColors[21] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M73.795,164.23c0,0,9.771-0.908,16.859-9.895c7.089-8.987-1.763-19.916-10.37-15.361
					C71.678,143.53,72.135,158.244,73.795,164.23z"
              />

              <path
                onClick={() => onFill(22)}
                fill={fillColors[22] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M73.795,164.23c0,0-5.113-13.218-15.456-14.099c-13.842-1.179-16.529,12.059-6.461,17.41
					C61.946,172.892,73.795,164.23,73.795,164.23z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            onClick={() => onFill(23)}
            fill={fillColors[23] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M84.126,12.258c0,0,7.333,4.667,8.667,29.667c1.333,25-0.291,51.129,27.728,65.001c28.02,13.872,54.272,6.637,54.272,6.637
			s8.801-34.907-7.433-62.971C146.92,15.258,100.126,28.925,84.126,12.258z"
          />
          <g>
            <path
              onClick={() => onFill(156)}
              fill={fillColors[156] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M174.792,113.562c0,0-55.75-73.304-84-94.554"
            />
            <path
              onClick={() => onFill(157)}
              fill={fillColors[157] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M94.042,41.508c0,0,20.866-1.79,43.481,25.766"
            />
            <path
              onClick={() => onFill(158)}
              fill={fillColors[158] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M118.553,23.448c0,0-0.427,17.977,12.906,37.144"
            />
            <path
              onClick={() => onFill(24)}
              fill={fillColors[24] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M93.741,60.592c0,0,25.862-6.384,51.082,15.392c0,0-15.884-27.685-4.582-47.33"
            />
            <path
              onClick={() => onFill(25)}
              fill={fillColors[25] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M97.547,81.438c0,0,35.243-5.558,61.434,11.943c0,0-10.062-34.38,0-53.501"
            />
            <path
              onClick={() => onFill(159)}
              fill={fillColors[159] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M110.263,100.293c0,0,37.118-10.45,59.574,6.633c0,0-8.505-19.227,3.35-43.072"
            />
          </g>
        </g>
        <g>
          <path
            onClick={() => onFill(160)}
            fill={fillColors[160] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M468.648,482.246c0,0-6.468-5.807-3.68-30.687c2.788-24.88,8.68-50.387-16.683-68.67c-25.363-18.283-52.446-15.455-52.446-15.455
			s-14.411,32.989-3.004,63.337C407.198,468.98,455.601,463.179,468.648,482.246z"
          />
          <g>
            <path
              onClick={() => onFill(161)}
              fill={fillColors[161] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M395.839,367.434c0,0,42.962,81.461,67.341,107.059"
            />
            <path
              onClick={() => onFill(162)}
              fill={fillColors[162] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M463.667,451.765c0,0-20.876-1.66-38.662-32.554"
            />
            <path
              onClick={() => onFill(163)}
              fill={fillColors[163] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M436.525,465.558c0,0,3.372-17.663-6.635-38.759"
            />
            <path
              onClick={() => onFill(164)}
              fill={fillColors[164] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M467.097,432.99c0,0-26.559,2.052-47.862-23.567c0,0,11.125,29.917-3.249,47.44"
            />
            <path
              onClick={() => onFill(165)}
              fill={fillColors[165] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M466.764,411.802c0,0-35.677-0.302-58.641-21.865c0,0,4.282,35.565-8.782,52.776"
            />
            <path
              onClick={() => onFill(166)}
              fill={fillColors[166] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M457.316,391.116c0,0-38.33,4.216-57.677-16.321c0,0,5.234,20.363-10.375,41.938"
            />
          </g>
        </g>
        <g>
          <path
            onClick={() => onFill(26)}
            fill={fillColors[26] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M363.1,169.995c0,0-4.75-29.25,9.25-51.75s31-21,31-21s-1.25,7.25-4,10.25c0,0,12-15.75,31-13.25c0,0-0.5,5.195-4.75,9.473
			c0,0,17.5-9.723,41-1.223c0,0-3,20.75-21.5,41.5c0,0,4.75-1.75,9.5,0.25c0,0-6,16-30.75,21.5c0,0,6.25,0,9.25,6.75
			C433.1,172.495,408.1,195.995,363.1,169.995z"
          />
          <g>
            <path
              onClick={() => onFill(167)}
              fill={fillColors[167] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M363.1,169.995c0,0,48.25-41,89.5-58.25"
            />
            <path
              onClick={() => onFill(27)}
              fill={fillColors[27] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M403.35,97.245c0,0-25.385,20.46-31.318,65.48c0,0,19.818,18.02,61.068,9.77"
            />
            <path
              onClick={() => onFill(28)}
              fill={fillColors[28] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M430.35,94.245c0,0-28.922,12.197-41.586,55.724c0,0,31.586,14.026,65.836-5.724"
            />
            <path
              onClick={() => onFill(29)}
              fill={fillColors[29] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M425.6,103.718c0,0-10.957,10.189-16.729,32.233c0,0,14.818,7.294,38.898,4.919"
            />
            <path
              onClick={() => onFill(30)}
              fill={fillColors[30] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M445.351,99.044c0,0-6.317,8.829-10.284,21.14c0,0,12.623,3.189,25.703,0"
            />
          </g>
        </g>
        <g>
          <path
            onClick={() => onFill(168)}
            fill={fillColors[168] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M41.039,481.501c0,0,10.013-11.308,11.288-31.53c1.275-20.222,5.44-57.941,32.111-71.144c31.213-15.451,58.377-4.132,58.377-4.132
			s13.705,44.51-8.22,70.947C103.835,482.735,64.9,456.682,41.039,481.501z"
          />
          <g>
            <path
              onClick={() => onFill(169)}
              fill={fillColors[169] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M142.815,374.695c-30.264,40.539-92.584,96.849-92.584,96.849"
            />
            <path
              onClick={() => onFill(170)}
              fill={fillColors[170] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M52.512,447.259c0,0,26.407-6.005,48.557-24.979c0,0-18.077,22.595-23.382,46.402"
            />
            <path
              onClick={() => onFill(171)}
              fill={fillColors[171] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M55.094,426.509c-0.09,0.465,31.9-1.545,64.951-24.482c0,0-16.532,30.517-20.554,64.403"
            />
            <path
              onClick={() => onFill(172)}
              fill={fillColors[172] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M62.636,402.833c1.144,0.261,33.744,6.49,68.46-13.46c0,0-9.14,27.506-9.606,68.29"
            />
            <path
              onClick={() => onFill(173)}
              fill={fillColors[173] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M76.987,383.572c0,0,41.732,6.922,61.466-3.2c0,0-5.551,20.794,0.922,58.289"
            />
            <path
              onClick={() => onFill(174)}
              fill={fillColors[174] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M101.805,372.621c0,0,16.425,6.63,39.389,4.22c0,0-1.91,15.763,5.384,37.684"
            />
          </g>
        </g>
        <g>
          <g>
            <g>
              <path
                onClick={() => onFill(31)}
                fill={fillColors[31] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M154.792,106.925c0,0-17.667,0.333-29-15.667c-11.333-16-2-28.667,5.667-30.667c7.667-2,2.942-10.333,16.638-12.333
					c13.696-2,28.626,17.667,28.661,45C176.758,93.258,165.459,91.592,154.792,106.925z"
              />

              <path
                onClick={() => onFill(32)}
                fill={fillColors[32] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M150.792,112.925c0,0-20.667-16.002-36.667-10.001c-16,6.001-18,17.667-11.333,27.668c6.667,10-3.333,19.667,13.333,27.667
					s38.667-17.333,41.333-24C157.459,134.258,150.952,121.964,150.792,112.925z"
              />

              <path
                onClick={() => onFill(33)}
                fill={fillColors[33] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M179.459,90.925c0,0-5-16,3.333-32c8.333-16,24-11.005,28.667-4.836c4.667,6.169,17.333,2.169,20.667,20.169
					c3.333,18-28.333,30.001-32.667,32.667C199.459,106.926,189.164,93.443,179.459,90.925z"
              />

              <path
                onClick={() => onFill(34)}
                fill={fillColors[34] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M163.126,137.258c-2.871-1.4-17.333,12.667-20,32c-2.667,19.333,9.333,25,18,22.667c8.667-2.333,16.333,6.322,26.333,0.494
					c10-5.827,15-23.705,0-51.766C187.459,140.653,176.792,143.925,163.126,137.258z"
              />

              <path
                onClick={() => onFill(35)}
                fill={fillColors[35] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M189.459,135.162c0,0,9,30.884,31,30.656c22-0.227,17.333-15.894,20.333-21.227s10.333-10.002,7.333-21.835
					s-26.524-18.499-48.095-8.166C200.03,114.592,197.775,130.873,189.459,135.162z"
              />
            </g>
            <path
              onClick={() => onFill(175)}
              fill={fillColors[175] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M143.126,65.592c0,0,13.369,21.386,21.018,31.693"
            />
            <path
              onClick={() => onFill(176)}
              fill={fillColors[176] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M109.126,134.258c0,0,28.453-8.002,43.56-11.501"
            />
            <path
              onClick={() => onFill(177)}
              fill={fillColors[177] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M209.792,65.592c0,0-13.048,16.052-19.524,31.693"
            />
            <path
              onClick={() => onFill(178)}
              fill={fillColors[178] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M169.837,182.925c0,0,3.595-28.544,3.109-42.272"
            />
            <path
              onClick={() => onFill(179)}
              fill={fillColors[179] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M197.498,124.273c0,0,21.452,4.775,34.873,16.38"
            />

            <path
              onClick={() => onFill(36)}
              fill={fillColors[36] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M150.633,103.886c-5.027,10.818-2.393,24.707,6.245,32.933c8.639,8.226,22.64,10.178,33.199,4.627
				c10.559-5.55,16.891-18.19,15.013-29.97C200.729,84.11,162.325,78.727,150.633,103.886z"
            />
          </g>
          <g>
            <g>
              <path d="M161.888,118.023c2.859-2.031,7.102,5.349,4.823,7.804C164.431,128.282,158.556,120.39,161.888,118.023z" />
              <path d="M183.988,104.082c2.859-2.031,7.102,5.349,4.823,7.804C186.531,114.34,180.656,106.449,183.988,104.082z" />
            </g>
            <path
              onClick={() => onFill(37)}
              fill={fillColors[37] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M172.059,117.673c0,0-0.965,3.681,2.63,3.506c3.595-0.175,2.894-3.244,2.543-4.296c0,0,3.069,1.317,4.647-0.744
				c1.578-2.061,0.438-5.656-2.192-5.306"
            />
            <g>
              <path
                onClick={() => onFill(38)}
                fill={fillColors[38] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M169.071,128.776c1.665,1.718-3.593,6.261-5.199,4.41C162.266,131.335,167.406,127.058,169.071,128.776z"
              />
              <path
                onClick={() => onFill(39)}
                fill={fillColors[39] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M196.564,108.372c1.806,1.569-3.044,6.545-4.803,4.839C190.003,111.504,194.758,106.803,196.564,108.372z"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <g>
              <path
                onClick={() => onFill(40)}
                fill={fillColors[40] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M291.947,161.134c0,0-13.094-10.809-16.317-27.41c-3.222-16.601,10.845-28.573,24.964-22.669
					c14.119,5.904,15.042,28.769,13.126,43.975C313.72,155.031,302.445,155.077,291.947,161.134z"
              />
              <path
                onClick={() => onFill(180)}
                fill={fillColors[180] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M295.181,131.471c0,0,3.933,14.84,6.677,25.505"
              />

              <path
                onClick={() => onFill(41)}
                fill={fillColors[41] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M319.534,156.346c0,0-3.468-16.621,4.39-31.595c7.858-14.974,26.322-15.53,33.655-2.098c7.333,13.433-6.234,31.86-17.233,42.534
					C340.346,165.187,331.515,158.178,319.534,156.346z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M340.594,135.209c0,0-6.203,14.043-10.725,24.084"
              />

              <path
                onClick={() => onFill(42)}
                fill={fillColors[42] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M342.286,170.559c0,0,8.914-14.451,24.917-19.916c16.003-5.465,29.789,6.83,25.873,21.624
					c-3.915,14.795-26.438,18.84-41.763,19.024C351.313,191.29,349.723,180.128,342.286,170.559z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M372.112,169.7c0,0-14.162,5.928-24.35,10.107"
              />

              <path
                onClick={() => onFill(43)}
                fill={fillColors[43] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M350.427,196.264c0,0,16.898-1.655,30.937,7.773c14.039,9.428,12.6,27.843-1.545,33.685
					c-14.145,5.841-31.001-9.634-40.426-21.72C339.393,216.001,347.313,207.977,350.427,196.264z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M369.169,219.482c0,0-13.292-7.682-22.787-13.261"
              />

              <path
                onClick={() => onFill(44)}
                fill={fillColors[44] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M334.074,222.105c0,0,13.372,10.464,17.026,26.975c3.654,16.511-10.095,28.846-24.364,23.312
					c-14.268-5.534-15.788-28.366-14.268-43.617C312.468,228.775,323.737,228.434,334.074,222.105z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M331.615,251.843c0,0-4.319-14.732-7.34-25.322"
              />

              <path
                onClick={() => onFill(45)}
                fill={fillColors[45] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M283.601,212.945c0,0-9.933,13.771-26.289,18.068s-29.219-8.96-24.247-23.434c4.972-14.474,27.727-16.885,43.026-15.963
					C276.092,191.616,276.873,202.864,283.601,212.945z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M253.791,211.651c0,0,14.552-4.891,25.016-8.325"
              />

              <path
                onClick={() => onFill(46)}
                fill={fillColors[46] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M307.073,228.287c0,0,2.035,16.857-7.074,31.104c-9.11,14.247-27.553,13.224-33.711-0.786
					c-6.158-14.01,8.934-31.21,20.805-40.905C287.093,217.7,295.292,225.438,307.073,228.287z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M284.283,247.547c0,0,7.381-13.462,12.745-23.08"
              />

              <path
                onClick={() => onFill(47)}
                fill={fillColors[47] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M287.684,166.272c0,0-13.058-24.251-31.892-22.618c-16.16,1.4-26.442,26.248-5.862,37.459c9.74,5.306,26.609,7.687,26.609,7.687
					S279.622,174.808,287.684,166.272z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M260.177,163.663c0,0,13.86,7.642,20.92,12.476"
              />
            </g>

            <path
              onClick={() => onFill(48)}
              fill={fillColors[48] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M277.311,174.623c-6.975,15.009-3.321,34.279,8.665,45.693c11.986,11.413,31.412,14.121,46.062,6.42
				c14.65-7.701,23.434-25.237,20.83-41.582C346.816,147.185,293.533,139.717,277.311,174.623z"
            />
          </g>
          <g>
            <g>
              <path d="M299.343,174.893c2.885,2.07-1.985,9.875-4.735,7.75S297.078,173.268,299.343,174.893z" />
              <path d="M328.986,193.633c2.885,2.07-1.985,9.875-4.735,7.75S326.72,192.008,328.986,193.633z" />
            </g>
            <path
              onClick={() => onFill(49)}
              fill={fillColors[49] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M317.292,189.878c0,0-1.71,2.99-4.23,5.04c-1.95,1.59-4.39,2.6-6.89,1.23c-2.67-1.46-2.66-4.35-1.87-7.04
				c0.94-3.18,2.96-6.1,2.96-6.1S312.672,184.508,317.292,189.878z"
            />
            <path
              onClick={() => onFill(50)}
              fill={fillColors[50] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M313.062,194.918c-1.95,1.59-4.39,2.6-6.89,1.23c-2.67-1.46-2.66-4.35-1.87-7.04
				C307.102,189.118,310.712,190.208,313.062,194.918z"
            />
            <g>
              <path
                onClick={() => onFill(51)}
                fill={fillColors[51] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M284.792,181.008c1.846-3.179,9.263,2.949,7.875,5.375C290.655,189.901,282.542,184.883,284.792,181.008z"
              />
              <path
                onClick={() => onFill(52)}
                fill={fillColors[52] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M322.841,204.653c1.846-3.179,9.263,2.949,7.875,5.375C328.704,213.545,320.591,208.528,322.841,204.653z"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <g>
              <g>
                <path
                  onClick={() => onFill(53)}
                  fill={fillColors[53] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M144.366,268.314c0,0-8.162-9.021-8.87-27.447c-0.708-18.425,15.774-34.391,19.327-34.446
						c3.553-0.055,17.822,12.53,18.408,29.902c0.586,17.372-8.318,30.216-8.318,30.216S151.423,266.251,144.366,268.314z"
                />

                <path
                  onClick={() => onFill(54)}
                  fill={fillColors[54] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M119.229,280.287c0,0-11.579-3.732-21.405-19.334c-9.826-15.603-3.535-37.67-0.486-39.495
						c3.049-1.824,21.699,1.941,30.893,16.692c9.194,14.751,7.904,30.327,7.904,30.327S124.31,274.972,119.229,280.287z"
                />

                <path
                  onClick={() => onFill(55)}
                  fill={fillColors[55] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M103.446,303.224c0,0-11.894,2.558-28.205-6.042c-16.311-8.599-21.896-30.856-20.168-33.961
						c1.729-3.104,19.763-9.169,35.1-0.991c15.338,8.178,22.009,22.312,22.009,22.312S105.189,296.081,103.446,303.224z"
                />

                <path
                  onClick={() => onFill(56)}
                  fill={fillColors[56] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M101.247,330.98c0,0-9.021,8.162-27.447,8.87s-34.391-15.774-34.446-19.327c-0.055-3.553,12.53-17.822,29.902-18.408
						c17.372-0.586,30.216,8.318,30.216,8.318S99.184,323.923,101.247,330.98z"
                />

                <path
                  onClick={() => onFill(57)}
                  fill={fillColors[570] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M113.22,356.117c0,0-3.732,11.579-19.334,21.405c-15.603,9.826-37.67,3.535-39.495,0.486
						c-1.824-3.049,1.941-21.699,16.692-30.893c14.751-9.194,30.327-7.904,30.327-7.904S107.905,351.036,113.22,356.117z"
                />

                <path
                  onClick={() => onFill(58)}
                  fill={fillColors[58] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M136.157,371.9c0,0,2.558,11.894-6.041,28.205c-8.599,16.311-30.856,21.897-33.961,20.168
						c-3.104-1.729-9.169-19.763-0.991-35.1c8.178-15.338,22.312-22.009,22.312-22.009S129.014,370.157,136.157,371.9z"
                />

                <path
                  onClick={() => onFill(59)}
                  fill={fillColors[59] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M163.913,374.099c0,0,8.162,9.021,8.87,27.447c0.708,18.426-15.774,34.391-19.327,34.446
						c-3.553,0.055-17.822-12.53-18.408-29.902c-0.586-17.372,8.318-30.216,8.318-30.216S156.856,376.162,163.913,374.099z"
                />

                <path
                  onClick={() => onFill(60)}
                  fill={fillColors[60] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M189.05,362.126c0,0,11.579,3.731,21.405,19.334c9.826,15.603,3.535,37.671,0.486,39.495
						c-3.049,1.824-21.699-1.941-30.893-16.692c-9.194-14.751-7.904-30.327-7.904-30.327S183.969,367.441,189.05,362.126z"
                />

                <path
                  onClick={() => onFill(61)}
                  fill={fillColors[61] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M204.833,339.189c0,0,11.893-2.558,28.205,6.042c16.311,8.599,21.896,30.856,20.168,33.961
						c-1.729,3.104-19.762,9.169-35.1,0.991c-15.338-8.178-22.009-22.312-22.009-22.312S203.09,346.332,204.833,339.189z"
                />

                <path
                  onClick={() => onFill(62)}
                  fill={fillColors[62] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M207.032,311.433c0,0,9.021-8.162,27.447-8.87c18.426-0.708,34.391,15.774,34.446,19.327
						c0.055,3.553-12.53,17.822-29.902,18.408c-17.372,0.586-30.216-8.318-30.216-8.318S209.095,318.491,207.032,311.433z"
                />

                <path
                  onClick={() => onFill(63)}
                  fill={fillColors[63] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M195.059,286.296c0,0,3.732-11.579,19.334-21.405c15.603-9.826,37.67-3.535,39.495-0.486
						c1.824,3.049-1.941,21.699-16.692,30.893c-14.751,9.194-30.327,7.905-30.327,7.905S200.374,291.377,195.059,286.296z"
                />

                <path
                  onClick={() => onFill(64)}
                  fill={fillColors[64] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M172.122,270.513c0,0-2.558-11.894,6.042-28.205c8.599-16.311,30.856-21.896,33.96-20.168c3.104,1.729,9.169,19.762,0.991,35.1
						c-8.178,15.338-22.312,22.009-22.312,22.009S179.265,272.256,172.122,270.513z"
                />
              </g>
              <g>
                <path
                  onClick={() => onFill(65)}
                  fill={fillColors[65] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M110.64,290.326c0,0-12-2-24-16s-9-36.75-6.25-39s21.75-1.25,33,12s12.25,28.847,12.25,28.847S114.89,284.326,110.64,290.326z"
                />

                <path
                  onClick={() => onFill(66)}
                  fill={fillColors[66] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M97.306,254.487c0,0,11.553,17.882,21.318,27.485"
                />

                <path
                  onClick={() => onFill(67)}
                  fill={fillColors[67] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M101.345,312.885c0,0-10.939,5.324-28.831,0.869c-17.893-4.455-28.632-24.734-27.695-28.161
						c0.937-3.427,17.001-13.623,33.848-9.345s26.701,16.41,26.701,16.41S101.332,305.533,101.345,312.885z"
                />

                <path
                  onClick={() => onFill(68)}
                  fill={fillColors[68] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M69.71,291.405c0,0,19.778,7.878,33.302,10.045"
                />

                <path
                  onClick={() => onFill(69)}
                  fill={fillColors[69] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M105.015,341.677c0,0-7.215,9.795-25.13,14.159c-17.915,4.363-36.844-8.609-37.605-12.08
						c-0.762-3.471,8.73-19.96,25.637-23.994c16.907-4.034,31.268,2.134,31.268,2.134S101.588,335.172,105.015,341.677z"
                />

                <path
                  onClick={() => onFill(70)}
                  fill={fillColors[70] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M67.023,337.345c0,0,21.175-2.207,34.158-6.568"
                />

                <path
                  onClick={() => onFill(71)}
                  fill={fillColors[71] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M122.885,362.444c0,0-1.142,12.112-14.254,25.076s-36.017,11.589-38.457,9.006c-2.44-2.583-2.793-21.606,9.624-33.769
						c12.417-12.163,27.904-14.269,27.904-14.269S116.598,358.631,122.885,362.444z"
                />

                <path
                  onClick={() => onFill(72)}
                  fill={fillColors[72] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M88.085,378.29c0,0,17.016-12.794,25.901-23.217"
                />

                <path
                  onClick={() => onFill(73)}
                  fill={fillColors[73] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M147.113,372.051c0,0,5.279,10.96,0.75,28.835c-4.529,17.874-24.852,28.529-28.276,27.578
						c-3.423-0.951-13.553-17.057-9.204-33.886c4.348-16.829,16.52-26.632,16.52-26.632S139.76,372.034,147.113,372.051z"
                />

                <path
                  onClick={() => onFill(74)}
                  fill={fillColors[74] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M125.502,403.597c0,0,7.96-19.745,10.183-33.26"
                />

                <path
                  onClick={() => onFill(181)}
                  fill={fillColors[181] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M174.523,368.753c0,0,9.95,6.999,14.704,24.815c4.754,17.816-7.802,37.023-11.256,37.86
						c-3.453,0.837-20.146-8.292-24.549-25.107c-4.402-16.815,1.451-31.307,1.451-31.307S168.094,372.321,174.523,368.753z"
                />

                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M171.022,406.831c0,0-2.669-21.121-7.313-34.006"
                />

                <path
                  onClick={() => onFill(182)}
                  fill={fillColors[182] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M198.068,350.878c0,0,12.009,1.945,24.073,15.89c12.064,13.945,9.167,36.709,6.428,38.971s-21.744,1.349-33.054-11.849
						c-11.31-13.199-12.381-28.791-12.381-28.791S193.846,356.897,198.068,350.878z"
                />

                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M211.565,386.655c0,0-11.634-17.829-21.443-27.388"
                />

                <path
                  onClick={() => onFill(75)}
                  fill={fillColors[75] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M207.898,323.942c0,0,11.229-4.68,28.833,0.807c17.604,5.487,27.147,26.356,26.012,29.723
						c-1.135,3.367-17.764,12.612-34.334,7.362c-16.57-5.25-25.702-17.934-25.702-17.934S207.485,331.283,207.898,323.942z"
                />

                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M238.232,347.223c0,0-19.287-9.014-32.662-11.963"
                />

                <path
                  onClick={() => onFill(76)}
                  fill={fillColors[76] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M204.355,297.493c0,0,6.608-10.214,24.226-15.655c17.618-5.441,37.297,6.36,38.268,9.779
						c0.97,3.418-7.505,20.452-24.136,25.504c-16.632,5.051-31.339-0.235-31.339-0.235S208.17,303.779,204.355,297.493z"
                />

                <path
                  onClick={() => onFill(77)}
                  fill={fillColors[77] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M242.54,299.515c0,0-21.002,3.486-33.697,8.626"
                />

                <path
                  onClick={() => onFill(78)}
                  fill={fillColors[78] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M184.673,276.267c0,0,0.383-12.159,12.659-25.918c12.276-13.759,35.223-13.817,37.819-11.392
						c2.596,2.426,4.137,21.389-7.495,34.305c-11.632,12.915-26.957,15.985-26.957,15.985S191.186,279.68,184.673,276.267z"
                />

                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M218.415,258.276c0,0-16.183,13.833-24.399,24.791"
                />

                <path
                  onClick={() => onFill(79)}
                  fill={fillColors[79] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M160.065,269.049c0,0-5.915-10.631-2.445-28.741c3.469-18.11,23.13-29.943,26.604-29.194
						c3.473,0.748,14.533,16.23,11.183,33.286s-14.924,27.559-14.924,27.559S167.406,268.634,160.065,269.049z"
                />

                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M179.782,236.286c0,0-6.784,20.18-8.208,33.801"
                />

                <path
                  onClick={() => onFill(80)}
                  fill={fillColors[80] ?? "#F9F6EE"}
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M131.802,272.691c0,0-9.73-7.303-13.932-25.257c-4.202-17.954,8.94-36.765,12.418-37.495
						c3.477-0.73,19.881,8.909,23.763,25.852c3.882,16.943-2.415,31.247-2.415,31.247S138.338,269.323,131.802,272.691z"
                />

                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  }}
                  d="
						M136.476,234.739c0,0,2.017,21.194,6.261,34.216"
                />
              </g>
            </g>

            <path
              onClick={() => onFill(81)}
              fill={fillColors[81] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M102.359,296.863c-10.016,21.552-4.768,49.224,12.443,65.613c17.211,16.389,45.106,20.277,66.143,9.219
				c21.037-11.058,33.651-36.24,29.911-59.71C202.165,257.462,125.653,246.739,102.359,296.863z"
            />
          </g>
          <g>
            <path d="M128.486,317.449c3.896-3.102,11.621,6.955,8.011,10.212C132.888,330.918,123.732,321.234,128.486,317.449z" />
            <g>
              <path
                onClick={() => onFill(183)}
                fill={fillColors[76] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M171.448,289.101c0,0-2.465,10.212-2.729,11.885c0,0,10.652,0.528,12.765,0.704"
              />

              <line
                onClick={() => onFill(76)}
                fill={fillColors[76] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                x1="168.719"
                y1="300.986"
                x2="177.259"
                y2="294.471"
              />
            </g>
            <path
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M163.97,302.396c-0.21,0.34-0.43,0.67-0.66,1c-1.66,2.44-3.73,4.53-5.93,6.29c-7.45,5.99-16.39,8.29-16.39,8.29"
            />
            <path
              onClick={() => onFill(82)}
              fill={fillColors[82] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M166.08,314.546c-3.28,2.8-7.13-2.39-8.7-4.86c2.2-1.76,4.27-3.85,5.93-6.29C165.45,305.926,169.69,311.456,166.08,314.546z"
            />

            <line
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              x1="160.626"
              y1="306.712"
              x2="163.965"
              y2="311.638"
            />
            <g>
              <path
                onClick={() => onFill(83)}
                fill={fillColors[83] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M137.818,333.912c2.034,3.318-4.666,8.188-6.515,5.634S136.145,331.182,137.818,333.912z"
              />
              <path
                onClick={() => onFill(84)}
                fill={fillColors[84] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M190.359,300.578c2.034,3.318-4.666,8.187-6.515,5.634C181.996,303.66,188.687,297.849,190.359,300.578z"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <g>
              <path
                onClick={() => onFill(85)}
                fill={fillColors[85] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M368.875,306.97c0,0-11.589-26.573,8.161-45.912c19.75-19.338,53.899-21.088,56.516-19.338
					c2.617,1.75,8.984,37.257-2.016,58.257s-36.533,20.791-36.533,20.791S383.396,309.289,368.875,306.97z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M383.179,312.165c0,0,17.357-25.867,26.107-40.031"
              />

              <path
                onClick={() => onFill(86)}
                fill={fillColors[86] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M344.433,331.027c0,0-28.608,4.695-42.492-19.206c-13.884-23.901-7.179-57.431-4.838-59.537
					c2.34-2.106,38.322,0.459,55.97,16.288c17.648,15.829,11.163,40.525,11.163,40.525S350.253,317.523,344.433,331.027z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M352.987,318.442c0,0-20.802-23.188-32.377-35.154"
              />

              <path
                onClick={() => onFill(184)}
                fill={fillColors[184] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M390.043,358.09c0,0,27.063,10.394,26.978,38.035c-0.086,27.641-22.806,53.195-25.889,53.831
					c-3.083,0.636-32.845-19.748-40.084-42.322c-7.239-22.574,10.83-40.615,10.83-40.615S378.201,366.806,390.043,358.09z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M376.305,364.633c0,0,6.245,30.519,10.193,46.692"
              />

              <path
                onClick={() => onFill(87)}
                fill={fillColors[87] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M394.876,355.716c0,0,12.782,26.021,40.303,23.455c27.522-2.566,50.933-27.488,51.29-30.616
					c0.357-3.128-22.617-30.94-45.75-36.123c-23.133-5.184-39.479,14.432-39.479,14.432S402.494,343.138,394.876,355.716z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M400.16,341.445c0,0,30.956,3.48,47.419,5.961"
              />

              <path
                onClick={() => onFill(88)}
                fill={fillColors[88] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M344.531,335.751c0,0-25.966-12.893-46.26,5.873c-20.294,18.767-23.736,52.787-22.117,55.487
					c1.618,2.701,36.765,10.821,58.285,0.876c21.52-9.945,22.577-35.457,22.577-35.457S346.127,350.368,344.531,335.751z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M349.01,350.294c0,0-26.696,16.053-41.276,24.09"
              />
            </g>

            <path
              onClick={() => onFill(89)}
              fill={fillColors[89] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M341.159,319.383c-6.022,12.958-2.867,29.596,7.481,39.45c10.348,9.854,27.12,12.192,39.769,5.543
				c12.648-6.649,20.233-21.789,17.984-35.901C401.168,295.693,355.164,289.246,341.159,319.383z"
            />
          </g>
          <g>
            <g>
              <path
                onClick={() => onFill(185)}
                fill={fillColors[185] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M385.976,336.554c0,0,5-3.5,8.167-0.833c3.167,2.667,2,8.167,2,8.167"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M351.441,317.936c0,0,5-3.5,8.167-0.833c3.167,2.667,2,8.167,2,8.167"
              />
            </g>
            <path
              onClick={() => onFill(90)}
              fill={fillColors[90] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M381.456,334.72c0,0-2.47,2.91-5.7,4.42c-2,0.94-4.3,1.34-6.47,0.16c-2.56-1.39-3.08-4.4-2.88-7.27
				c0.25-3.47,1.55-6.76,1.55-6.76S375.116,326.72,381.456,334.72z"
            />
            <path
              onClick={() => onFill(91)}
              fill={fillColors[91] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M375.756,339.14c-2,0.94-4.3,1.34-6.47,0.16c-2.56-1.39-3.08-4.4-2.88-7.27C369.416,332.38,373.076,334.02,375.756,339.14z"
            />
            <g>
              <path
                onClick={() => onFill(92)}
                fill={fillColors[92] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M343.786,319.72c2.188-2.059,8.667,3.432,6.667,5.549C348.453,327.387,340.953,322.387,343.786,319.72z"
              />
              <path
                onClick={() => onFill(93)}
                fill={fillColors[93] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M391.796,346.504c2.188-2.059,8.667,3.432,6.667,5.549S388.963,349.171,391.796,346.504z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            onClick={() => onFill(94)}
            fill={fillColors[94] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M258.792,77.56c-2.621-0.452-8.375-8.676-5.5-19.426s14.281-20.113,17.875-19.008c4.5,1.383,7.625,15.258,3.998,26.466
			C271.464,77.029,264.167,78.486,258.792,77.56z"
          />

          <path
            onClick={() => onFill(95)}
            fill={fillColors[95] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M258.553,78.895c-1.115,2.415-10.548,5.844-20.188,0.285c-9.64-5.559-15.731-18.999-13.734-22.185
			c2.5-3.989,16.711-3.416,26.599,2.988C261.32,66.518,260.838,73.942,258.553,78.895z"
          />

          <path
            onClick={() => onFill(96)}
            fill={fillColors[96] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M259.78,79.472c2.044,1.701,2.915,11.701-4.95,19.574c-7.865,7.872-22.423,10.278-24.984,7.524
			c-3.206-3.448,1.025-17.026,9.771-24.919C248.541,73.595,255.588,75.982,259.78,79.472z"
          />

          <path
            onClick={() => onFill(97)}
            fill={fillColors[97] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M260.655,78.436c2.173-1.534,12.057,0.213,17.626,9.847c5.568,9.634,4.124,24.32,0.801,26.08
			c-4.16,2.204-16.181-5.397-21.541-15.888C252.07,87.771,256.2,81.581,260.655,78.436z"
          />

          <path
            onClick={() => onFill(98)}
            fill={fillColors[98] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M259.881,77.322c-0.919-2.495,3.326-11.591,14.074-14.476c10.747-2.885,24.558,2.311,25.399,5.976
			c1.052,4.589-9.401,14.232-20.922,16.695C266.676,88.03,261.766,82.44,259.881,77.322z"
          />

          <path
            onClick={() => onFill(99)}
            fill={fillColors[99] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M255.226,75.806c-0.993,1.386-1.187,3.285-0.574,4.877c0.979,2.542,4.049,4.065,6.665,3.306c2.616-0.759,4.394-3.689,3.86-6.36
			C264.21,72.791,257.964,71.986,255.226,75.806z"
          />
        </g>
        <g>
          <path
            onClick={() => onFill(100)}
            fill={fillColors[100] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M92.537,186.61c5.278-2.381,9.834,8.494,5.028,10.869C92.136,200.162,86.804,189.196,92.537,186.61z"
          />
          <path
            onClick={() => onFill(101)}
            fill={fillColors[101] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M92.537,193.477c-4.097-9.373-19.697-6.511-30.447,2.154c-10.75,8.664-6.275,21.384,2.6,24.741S100.001,210.552,92.537,193.477z"
          />
          <g>
            <path
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M81.26,187.68c0,0,4.663,9.772,10.546,19.223"
            />
            <path
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M72.782,189.519c0,0,7.72,16.813,13.751,23.636"
            />
            <path
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M65.161,193.396c0,0,5.934,14.578,13.919,24.581"
            />
            <path
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M59.427,198.202c0,0,3.744,13.678,12.003,22.352"
            />
          </g>
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M97.901,188.632c0,0,7.226-6.672,1.695-11.975"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M99.595,192.085c0,0,6.454-3.611,11.461,1.392"
          />
          <g>
            <path
              onClick={() => onFill(102)}
              fill={fillColors[102] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M90.601,193.396c0,0,0.369-36.042-11.521-32.292C67.189,164.854,84.262,187.437,90.601,193.396z"
            />

            <path
              onClick={() => onFill(103)}
              fill={fillColors[103] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M90.601,193.396c0,0-20.661-30.165-29.286-21.791C52.689,179.979,73.137,192.687,90.601,193.396z"
            />

            <path
              onClick={() => onFill(104)}
              fill={fillColors[104] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M90.657,194.837c0,0,29.682,20.448,19.77,28.011C100.516,230.412,91.88,203.45,90.657,194.837z"
            />

            <path
              onClick={() => onFill(105)}
              fill={fillColors[105] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M90.657,194.837c0,0,12.769,34.26,0.956,36.491C79.801,233.56,81.182,209.524,90.657,194.837z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              onClick={() => onFill(106)}
              fill={fillColors[106] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M219.492,431.687c0,0-49.649,15.389-56.847,25.389c-7.198,10,1.302,15.375,15.177,8.375s43.5-30.784,43.5-30.784L219.492,431.687
				z"
            />
            <path
              onClick={() => onFill(107)}
              fill={fillColors[107] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M223.936,438.364c0,0-36.513,39.586-27.814,46.336c8.699,6.75,30.145-43.325,30.145-43.325L223.936,438.364z"
            />
            <path
              onClick={() => onFill(108)}
              fill={fillColors[108] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M222.175,429.948c0,0,33.897-48.216,41.022-48.419c7.125-0.203,10.625,6.922-3.375,20.422s-35.841,30.765-35.841,30.765
				L222.175,429.948z"
            />
            <path
              onClick={() => onFill(109)}
              fill={fillColors[109] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M226.374,436.039c0,0,46.619-27.861,50.417-21.589c5.031,8.307-26.388,18.601-48.741,23.738L226.374,436.039z"
            />
          </g>
          <path
            onClick={() => onFill(110)}
            fill={fillColors[110] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M218.322,429.2c0,0-2.5,0.625-3.375-2.625s3.5-5.125,5.25-3.375s1.25,3.875,0.875,4.875c0,0,8.125,15.125,24.5,26.75
			s28.375,15.185,27.875,17.593c-0.5,2.407-20.75-6.718-30.375-13.968S220.42,435.158,218.322,429.2z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M215.63,423.767c0,0-5.934-7.691-10.559-6.816"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M217.175,422.757c0,0-4.861-9.773-1.545-12.853"
          />
        </g>
        <g>
          <g>
            <path
              onClick={() => onFill(111)}
              fill={fillColors[111] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M327.902,422.81c9-8.059,11.895-26.349-5.539-35.279c-16.14-8.267-34.136,9.022-27.354,25.402
				C300.819,426.962,318.275,431.431,327.902,422.81z"
            />

            <path
              onClick={() => onFill(112)}
              fill={fillColors[112] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M323.755,436.26c-5.455-10.779-22.373-18.309-35.51-3.781c-12.163,13.45-0.121,35.308,17.456,32.996
				C320.756,463.495,329.59,447.791,323.755,436.26z"
            />

            <path
              onClick={() => onFill(113)}
              fill={fillColors[113] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M333.297,444.805c-11.823,2.479-23.476,16.872-12.843,33.322c9.844,15.229,34.074,9.255,36.39-8.322
				C358.829,454.75,345.945,442.152,333.297,444.805z"
            />

            <path
              onClick={() => onFill(114)}
              fill={fillColors[114] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M346.277,433.103c-0.665,12.062,10.221,27.043,28.862,21.03c17.258-5.567,17.758-30.517,1.38-37.304
				C362.492,411.016,346.989,420.2,346.277,433.103z"
            />

            <path
              onClick={() => onFill(115)}
              fill={fillColors[115] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M344.733,422.524c11.479,3.764,28.767-2.874,27.783-22.436c-0.91-18.111-24.881-25.052-35.675-10.988
				C327.595,401.145,332.453,418.497,344.733,422.524z"
            />
          </g>
          <g>
            <path
              onClick={() => onFill(116)}
              fill={fillColors[116] ?? "#F9F6EE"}
              style={{
                stroke: "#000000",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              d="
				M316.661,428.908c-1.958,8.977,3.801,19.185,12.705,21.643c4.522,1.249,9.506,0.545,13.632-1.679
				c7.142-3.849,11.417-12.369,10.214-20.357C350.099,407.842,321.331,407.497,316.661,428.908z"
            />
            <g>
              <path
                onClick={() => onFill(117)}
                fill={fillColors[117] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M326.516,440.116c-0.153,1.769,0.844,3.592,2.431,4.389c1.587,0.796,3.665,0.495,4.939-0.743
					c1.273-1.238,1.629-3.33,0.808-4.905C332.721,435.074,326.913,435.529,326.516,440.116z"
              />
              <path
                onClick={() => onFill(118)}
                fill={fillColors[118] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M334.594,424.38c3.042,0.178,3.287-4.566,0.361-4.845C331.947,419.248,331.451,424.195,334.594,424.38z"
              />
              <path
                onClick={() => onFill(119)}
                fill={fillColors[119] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M321.634,427.015c-0.379,1.28,0.095,2.774,1.156,3.583c1.061,0.809,2.644,0.865,3.746,0.112c1.103-0.752,1.627-2.264,1.206-3.53
					C326.774,424.267,322.565,423.868,321.634,427.015z"
              />
              <path
                onClick={() => onFill(120)}
                fill={fillColors[120] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M340.82,428.211c0.027,1.611,1.321,3.097,2.906,3.388c1.585,0.291,3.299-0.608,4.002-2.058c0.703-1.45,0.366-3.323-0.766-4.47
					C344.765,422.842,340.773,425.393,340.82,428.211z"
              />
              <path
                onClick={() => onFill(121)}
                fill={fillColors[121] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M338.526,437.28c-0.521,1.505-0.099,3.293,1.04,4.407c1.143,1.118,2.955,1.498,4.445,0.918c1.286-0.5,2.284-1.682,2.561-3.034
					c0.277-1.352-0.176-2.831-1.161-3.797C343.257,433.666,339.528,434.386,338.526,437.28z"
              />
              <path
                onClick={() => onFill(122)}
                fill={fillColors[122] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M332.827,430.231c0.085,1.159,1.188,2.148,2.349,2.106c1.161-0.042,2.19-1.107,2.191-2.27
					C337.37,426.978,332.601,427.145,332.827,430.231z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                onClick={() => onFill(123)}
                fill={fillColors[123] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M317.365,408.116c-0.307,0.694-0.197,1.562,0.296,2.14c0.492,0.578,1.349,0.824,2.065,0.572c0.84-0.297,1.372-1.254,1.227-2.133
					c-0.137-0.832-0.815-1.468-1.601-1.708C318.533,406.736,317.703,407.352,317.365,408.116z"
              />
              <path
                onClick={() => onFill(124)}
                fill={fillColors[124] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M320.306,410.479c0,0,4.818,6.325,7.945,12.278"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(125)}
                fill={fillColors[125] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M349.762,404.387c-0.759,0.031-1.488,0.513-1.789,1.21s-0.144,1.574,0.399,2.105c0.637,0.622,1.731,0.677,2.455,0.159
					c0.685-0.491,0.957-1.38,0.826-2.191C351.515,404.826,350.596,404.353,349.762,404.387z"
              />
              <path
                onClick={() => onFill(126)}
                fill={fillColors[126] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M348.94,408.069c0,0-3.547,7.116-7.506,12.551"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(127)}
                fill={fillColors[127] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M305.186,443.947c0.582,0.488,1.446,0.622,2.138,0.31c0.692-0.313,1.166-1.067,1.122-1.825c-0.052-0.889-0.824-1.666-1.709-1.77
					c-0.837-0.099-1.637,0.376-2.085,1.065C304.184,442.442,304.546,443.41,305.186,443.947z"
              />
              <path
                onClick={() => onFill(128)}
                fill={fillColors[128] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M308.272,441.777c0,0,7.413-2.875,14-4.229"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(129)}
                fill={fillColors[129] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M336.905,464.428c0.623-0.435,0.978-1.234,0.856-1.983c-0.121-0.75-0.726-1.404-1.47-1.559
					c-0.872-0.181-1.823,0.361-2.154,1.188c-0.314,0.782-0.063,1.678,0.484,2.291C335.191,465.002,336.22,464.906,336.905,464.428z"
              />
              <path
                onClick={() => onFill(130)}
                fill={fillColors[130] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M335.614,460.883c0,0-0.843-7.906-0.433-14.618"
              />
            </g>
            <g>
              <path
                onClick={() => onFill(131)}
                fill={fillColors[131] ?? "#F9F6EE"}
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M365.412,437.848c-0.267-0.711-0.954-1.252-1.711-1.319c-0.756-0.067-1.54,0.358-1.873,1.04c-0.391,0.8-0.1,1.856,0.62,2.381
					c0.681,0.497,1.61,0.475,2.339,0.096C365.546,439.651,365.706,438.63,365.412,437.848z"
              />
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="
					M361.659,438.224c0,0-7.87-1.133-14.273-3.187"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            onClick={() => onFill(132)}
            fill={fillColors[132] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M132.555,476.176c0,0-9.282-21.564,14.49-25.011C147.046,451.165,155.991,472.589,132.555,476.176z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M136.513,468.624c0,0,6.13-10.186,10.532-17.459"
          />
          <path
            onClick={() => onFill(133)}
            fill={fillColors[133] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M227.333,183.389c0,0,0.108,23.477-23.119,17.35C204.214,200.739,204.362,177.523,227.333,183.389z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M220.737,188.79c0,0-9.626,6.976-16.523,11.948"
          />
          <path
            onClick={() => onFill(134)}
            fill={fillColors[134] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M288.429,34.957c0,0,16.335-2.418,14.387,14.365C302.816,49.322,286.637,51.537,288.429,34.957z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M292.848,39.011c0,0,5.818,6.006,9.968,10.312"
          />
          <path
            onClick={() => onFill(135)}
            fill={fillColors[135] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M449.068,171.66c0,0,16.335-2.418,14.387,14.365C463.455,186.026,447.277,188.24,449.068,171.66z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M453.488,175.714c0,0,5.818,6.006,9.968,10.312"
          />
          <path
            onClick={() => onFill(136)}
            fill={fillColors[136] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M37.844,172.593c0,0,16.2,3.198,8.739,18.357C46.583,190.95,30.598,187.613,37.844,172.593z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M40.649,177.894c0,0,3.468,7.609,5.935,13.056"
          />
          <path
            onClick={() => onFill(137)}
            fill={fillColors[137] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M275.183,281.181c0,0,16.2,3.198,8.74,18.357C283.923,299.537,267.938,296.2,275.183,281.181z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M277.988,286.481c0,0,3.468,7.609,5.935,13.056"
          />
          <path
            onClick={() => onFill(138)}
            fill={fillColors[138] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M239.79,31.412c0,0-2.064,16.383-17.705,9.994C222.085,41.406,224.303,25.228,239.79,31.412z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M234.697,34.579c0,0-7.349,3.988-12.612,6.828"
          />
          <path
            onClick={() => onFill(139)}
            fill={fillColors[139] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M380.535,74.931c0,0,7.943,14.477-8.471,18.482C372.064,93.413,364.366,79.012,380.535,74.931z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M378.269,80.484c0,0-3.61,7.542-6.205,12.93"
          />
          <path
            onClick={() => onFill(140)}
            fill={fillColors[140] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M462.613,77.902c0,0,0.384,16.508-16.03,12.505C446.583,90.407,446.381,74.079,462.613,77.902z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M458.045,81.787c0,0-6.678,5.033-11.462,8.62"
          />
          <path
            onClick={() => onFill(141)}
            fill={fillColors[141] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M373.565,248.212c0,0,0.384,16.508-16.03,12.505C357.535,260.717,357.333,244.389,373.565,248.212z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M368.997,252.097c0,0-6.678,5.033-11.462,8.62"
          />
          <path
            onClick={() => onFill(142)}
            fill={fillColors[142] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M258.176,439.038c0,0,16.358-2.253,14.241,14.51C272.417,453.547,256.217,455.598,258.176,439.038z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M262.554,443.136c0,0,5.757,6.065,9.863,10.412"
          />
          <path
            onClick={() => onFill(143)}
            fill={fillColors[143] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M126.899,178.62c0,0,13.456,9.571,0.427,20.327C127.326,198.947,114.123,189.337,126.899,178.62z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M127.279,184.605c0,0,0.036,8.362,0.047,14.342"
          />
          <path
            onClick={() => onFill(144)}
            fill={fillColors[144] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M89.62,93.274c0,0,13.456,9.571,0.427,20.326C90.046,113.601,76.843,103.991,89.62,93.274z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M89.999,99.259c0,0,0.036,8.362,0.047,14.342"
          />
          <path
            onClick={() => onFill(145)}
            fill={fillColors[145] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M425.278,199.637c0,0,11.526,20.453-11.744,26.412C413.534,226.05,402.357,205.701,425.278,199.637z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M422.147,207.568c0,0-5.01,10.781-8.613,18.482"
          />
          <path
            onClick={() => onFill(146)}
            fill={fillColors[146] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M289.117,317.113c0,0,11.527,20.453-11.743,26.412C277.374,343.526,266.197,323.176,289.117,317.113z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M285.987,325.044c0,0-5.01,10.781-8.613,18.482"
          />
          <path
            onClick={() => onFill(147)}
            fill={fillColors[147] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M377.907,459.186c0,0,20.297-11.798,26.567,11.39C404.473,470.576,384.275,482.023,377.907,459.186z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M385.878,462.21c0,0,10.847,4.866,18.595,8.365"
          />
          <path
            onClick={() => onFill(148)}
            fill={fillColors[148] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M42.891,227.623c0,0,22.847-5.4,22.117,18.61C65.008,246.233,42.357,251.326,42.891,227.623z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M49.641,232.831c0,0,8.968,7.805,15.367,13.402"
          />
          <path
            onClick={() => onFill(149)}
            fill={fillColors[149] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M83.013,59.649c0,0,0.043,23.477-23.167,17.287C59.846,76.936,60.057,53.72,83.013,59.649z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M76.402,65.033c0,0-9.646,6.95-16.555,11.903"
          />
          <path
            onClick={() => onFill(150)}
            fill={fillColors[150] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M416.83,59.657c0,0,22.531-6.597,23.068,17.418C439.898,77.074,417.547,83.355,416.83,59.657z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M423.846,64.501c0,0,9.367,7.321,16.052,12.573"
          />
          <path
            onClick={() => onFill(151)}
            fill={fillColors[151] ?? "#F9F6EE"}
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M448.21,279.126c0,0,23.457-0.967,18.185,22.469C466.395,301.595,443.189,302.298,448.21,279.126z"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: "1.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
			M453.85,285.521c0,0,7.324,9.365,12.545,16.074"
          />
        </g>
      </g>
    </svg>
  );
}
