import {
  LoaderOverlay,
  LoaderWrapper,
  CabbagePicWrapper,
} from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderWrapper>
        <CabbagePicWrapper>
          <svg
            id="cabbage-anim"
            width="90"
            height="90"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="bgGradient"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#7A5FFF">
                  <animate
                    attributeName="stop-color"
                    values="#7A5FFF; #ff751d; #7A5FFF"
                    dur="4s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>

                <stop offset="100%" stopColor="#ff751d">
                  <animate
                    attributeName="stop-color"
                    values="#ff751d; #7A5FFF; #ff751d"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
            <g>
              <path
                fill="url(#bgGradient)"
                stroke="url(#bgGradient)"
                d="M34.313 15.941c0 1.532-0.332 3.036-0.995 4.499-0.844 1.845-1.775 3.426-2.846 4.9l0.056-0.081c-0.050 0.070-0.1 0.131-0.153 0.189l0.002-0.002 1.307 1.624c0.047 0.058 0.076 0.133 0.076 0.215 0 0.066-0.019 0.128-0.052 0.18l0.001-0.001c-0.035 0.056-0.86 1.391-2.179 2.521-1.325 1.135-2.626 1.632-2.68 1.652-0.036 0.014-0.078 0.022-0.121 0.022-0.087 0-0.167-0.033-0.228-0.086l0 0-1.129-0.998c-0.026-0.023-0.049-0.051-0.067-0.081l-0.001-0.002c-0.993 0.51-2.841 1.195-5.885 1.442-2.695 0.218-4.904-0.123-6.568-1.013-0.089-0.047-0.235-0.118-0.392-0.194-0.27-0.131-0.548-0.265-0.701-0.359-0.15-0.092-0.323-0.191-0.514-0.302-1.487-0.859-4.254-2.457-6.363-6.11-1.787-3.096-1.973-4.636-2.137-5.995-0.098-0.808-0.182-1.506-0.603-2.445-1.070-2.39-1.946-2.868-1.955-2.872-0.087-0.046-0.152-0.126-0.177-0.221l-0.001-0.002c-0.007-0.026-0.011-0.056-0.011-0.087 0-0.072 0.022-0.138 0.060-0.193l-0.001 0.001c0.173-0.25 1.082-1.5 1.96-1.514 0.426-0.007 0.717 0.141 0.929 0.249 0.219 0.11 0.224 0.106 0.286 0.060 0.067-0.050 0.103-0.141 0.158-0.286 0.13-0.345 0.326-0.867 1.334-0.891 0.803-0.020 1.251 0.404 1.577 0.748 0.34-0.681 1.268-2.428 2.483-3.814 0.786-0.895 1.704-1.597 2.335-2.028 0.482-0.329 0.8-0.527 1.017-0.641-0.239-0.441-0.342-0.742-0.422-0.975-0.094-0.274-0.146-0.425-0.366-0.662-0.731-0.788-0.156-2.075-0.049-2.231 0.060-0.086 0.153-0.144 0.26-0.156l0.002-0c0.197-0.022 0.318 0.091 0.539 0.295 0.367 0.339 1.131 1.044 2.428 1.383 1.162 0.303 2.512 0.24 3.703 0.184 0.752-0.035 1.462-0.069 2.024-0.001 1.835 0.221 5.654 0.682 8.794 3.497 1.501 1.346 2.813 3.036 3.732 4.783 0.022 0.029 0.040 0.062 0.052 0.098l0.001 0.002c0.181 0.337 0.38 0.764 0.559 1.202l0.035 0.096c0.589 1.485 0.883 2.954 0.883 4.398zM33.434 17.823c0.48-2.561-0.095-5.054-1.195-7.228-0.307-0.15-1.334-0.586-2.887-0.554-1.83 0.038-2.408 0.355-2.413 0.359-0.049 0.029-0.108 0.045-0.172 0.045-0.125 0-0.234-0.066-0.295-0.165l-0.001-0.002c-0.031-0.050-0.050-0.112-0.050-0.177 0-0.12 0.063-0.226 0.157-0.286l0.001-0.001c0.068-0.042 0.721-0.416 2.758-0.459 1.011-0.021 1.819 0.137 2.388 0.309-0.884-1.454-1.922-2.703-3.117-3.781l-0.015-0.013c-0.543-0.488-1.145-0.932-1.787-1.316l-0.053-0.029c-0.307 0.126-1.194 0.408-2.683 0.254-1.734-0.178-2.68-0.244-2.689-0.244-0.179-0.014-0.319-0.163-0.319-0.345 0-0.007 0-0.014 0.001-0.022l-0 0.001c0.013-0.179 0.161-0.319 0.342-0.319 0.008 0 0.017 0 0.025 0.001l-0.001-0c0.010 0.001 0.965 0.067 2.713 0.247 0.764 0.079 1.344 0.031 1.743-0.040-2.243-1.096-4.456-1.363-5.709-1.514-0.504-0.061-1.187-0.029-1.909 0.005-1.241 0.058-2.646 0.124-3.909-0.206-1.35-0.353-2.178-1.048-2.618-1.45-0.083 0.32-0.127 0.77 0.114 1.030 0.319 0.344 0.408 0.604 0.511 0.905 0.098 0.285 0.219 0.64 0.601 1.256 0.352 0.569 0.814 0.583 1.539 0.558 0.48-0.017 1.023-0.035 1.504 0.244 0.84 0.489 0.647 1.085 0.52 1.479-0.069 0.213-0.129 0.399-0.084 0.592 0.148 0.018 0.564-0.108 0.873-0.202 0.709-0.216 1.682-0.512 2.663-0.352 0.548 0.089 0.883 0.254 1.055 0.517 0.2 0.307 0.117 0.634 0.049 0.896-0.089 0.345-0.081 0.412 0.063 0.511 0.549 0.379 1.051 0.485 1.745 0.632 0.292 0.062 0.624 0.132 0.997 0.232 0.583 0.156 0.99 0.455 1.211 0.889 0.336 0.66 0.244 1.61-0.291 2.99-0.342 0.86-0.547 1.857-0.561 2.899l-0 0.006v0.011c0 0.298 0.139 0.567 0.357 0.862 1.899 1.979 2.97 4.158 3.067 6.305 0.019 0.415 0.003 0.852-0.037 1.295 0.121 0.482 0.495 0.773 0.851 0.892 0.444 0.147 1.067 0.099 1.484-0.481 0.991-1.359 1.899-2.902 2.653-4.532l0.070-0.17c0.194-0.412 0.379-0.907 0.526-1.419l0.018-0.073c-0.165-0.219-0.97-1.232-2.357-2.166-0.164 0.072-1.154 0.494-2.032 0.545-0.438 0.025-1 0.040-1.196-0.033l0.242-0.642s-0.008-0.004-0.029-0.009c0.008 0.002 0.202 0.043 0.943-0 0.461-0.027 0.979-0.181 1.342-0.311-1.808-1.042-2.452-1.195-2.459-1.197-0.155-0.036-0.269-0.173-0.269-0.336 0-0.025 0.003-0.049 0.008-0.072l-0 0.002c0.034-0.156 0.17-0.271 0.334-0.271 0.024 0 0.047 0.002 0.070 0.007l-0.002-0c0.075 0.015 0.787 0.181 2.809 1.359 1.371 0.798 2.305 1.727 2.792 2.282zM26.795 30.917c0.874-0.402 1.628-0.887 2.301-1.463l-0.013 0.011c0.946-0.81 1.635-1.755 1.91-2.16l-1.033-1.283c-0.361 0.47-0.948 1.224-1.362 1.705-1.093 1.272-2.353 2.188-2.406 2.227-0.020 0.014-0.042 0.027-0.066 0.038l-0.002 0.001c-0.056 0.043-0.124 0.091-0.194 0.138l-0.015 0.009 0.88 0.778zM26.724 28.637c0.41-0.361 0.9-0.829 1.353-1.356 0.277-0.322 0.642-0.781 0.959-1.187-0.034 0.002-0.074 0.003-0.114 0.003-0.234 0-0.458-0.039-0.667-0.111l0.014 0.004c-0.303-0.101-0.562-0.261-0.776-0.468l0.001 0c-0.198 1.181-0.517 2.316-0.77 3.114zM25.73 29.43c0.172-0.47 0.995-2.803 1.212-4.95-0.021-0.113-0.034-0.242-0.034-0.374 0-0.014 0-0.028 0-0.043l-0 0.002c0.012-0.662-0.035-1.295-0.142-1.88-0.393-2.149-1.571-3.55-2.275-4.387-0.125-0.147-0.235-0.28-0.328-0.397l-0.087-0.113c-0.595-0.611-1.231-1.173-1.907-1.686l-0.042-0.031c-2.87-2.174-4.242-2.040-4.902-1.975l-0.096 0.009c-0.171 0.015-0.48 0.111-0.807 0.212-0.85 0.264-2.014 0.624-2.873 0.283-0.793-0.314-0.864-1.115-0.933-1.889-0.050-0.555-0.101-1.129-0.398-1.577-0.637-0.958-2.275-0.475-3.143-0.039-0.343 0.172-0.601 0.385-0.828 0.573-0.389 0.322-0.793 0.654-1.401 0.502-0.388-0.097-0.639-0.366-0.882-0.625-0.308-0.33-0.574-0.614-1.124-0.601-0.545 0.014-0.603 0.167-0.708 0.447-0.071 0.187-0.158 0.42-0.388 0.593-0.409 0.307-0.755 0.132-1.008 0.004-0.181-0.092-0.352-0.179-0.608-0.175-0.321 0.005-0.842 0.501-1.204 0.948 0.409 0.349 1.133 1.163 1.944 2.974 0.463 1.034 0.557 1.816 0.657 2.643 0.156 1.294 0.333 2.76 2.050 5.735 2.017 3.494 4.58 4.974 6.112 5.859 0.197 0.114 0.374 0.217 0.529 0.311 0.123 0.076 0.411 0.215 0.642 0.326 0.167 0.081 0.322 0.157 0.417 0.207 1.432 0.767 3.325 1.093 5.634 0.971-1.73-0.513-4.302-1.561-6.692-3.635-4.007-3.477-6.193-10.232-6.284-10.518-0.010-0.031-0.016-0.067-0.016-0.104 0-0.19 0.154-0.343 0.343-0.343 0.152 0 0.282 0.099 0.326 0.237l0.001 0.002c0.021 0.065 2.009 6.206 5.522 9.689 0.222-0.675 0.668-2.242 0.419-3.333-0.167-0.76-0.265-1.155-0.368-1.549l0.083 0.371c-0.213-0.846-0.366-1.457-0.394-2.176l-0-0.014c-0-0.002-0-0.004-0-0.007 0-0.19 0.154-0.343 0.343-0.343 0.187 0 0.339 0.15 0.343 0.336v0c0.024 0.617 0.158 1.174 0.345 1.922l0.642-0.668c0.063-0.065 0.15-0.106 0.248-0.106 0.189 0 0.343 0.154 0.343 0.343 0 0.092-0.036 0.176-0.095 0.237l0-0-0.941 0.98c0.040 0.164 0.081 0.337 0.123 0.52 0.34 1.491-0.389 3.592-0.539 3.996l0.009 0.008c1.283 1.113 2.632 1.92 3.864 2.502-0.498-0.914-1.14-2.406-0.665-3.355 0.315-0.631 0.882-1.11 1.43-1.575 0.599-0.508 1.165-0.987 1.378-1.615 0.047-0.137 0.175-0.233 0.325-0.233 0.189 0 0.343 0.154 0.343 0.343 0 0.039-0.007 0.077-0.019 0.112l0.001-0.002c-0.274 0.808-0.94 1.373-1.585 1.918-0.234 0.198-0.462 0.391-0.665 0.59 0.446 0.144 1.289 0.384 1.978 0.391 0.98 0.011 2.369-0.478 2.383-0.483 0.034-0.013 0.074-0.020 0.115-0.020 0.189 0 0.343 0.153 0.343 0.343 0 0.148-0.094 0.274-0.225 0.322l-0.002 0.001c-0.061 0.022-1.517 0.535-2.621 0.523-0.969-0.011-2.138-0.404-2.447-0.514-0.043 0.067-0.082 0.135-0.118 0.205-0.427 0.856 0.669 2.82 1.086 3.441 0.016 0.024 0.029 0.048 0.038 0.074 1.953 0.774 3.401 0.962 3.427 0.965l0.010 0.002c3.106-0.473 4.496-1.418 4.787-1.64zM23.564 15.857c0.029-1.098 0.249-2.136 0.627-3.095l-0.021 0.062c0.447-1.153 0.554-1.971 0.319-2.432-0.131-0.257-0.385-0.433-0.777-0.538-0.196-0.058-0.52-0.135-0.847-0.203l-0.115-0.020c-0.714-0.151-1.33-0.281-1.993-0.739-0.559-0.386-0.42-0.925-0.337-1.246 0.035-0.139 0.076-0.297 0.041-0.351-0.015-0.022-0.111-0.136-0.591-0.215-0.823-0.135-1.671 0.124-2.352 0.332-0.632 0.192-1.089 0.332-1.43 0.141-0.105-0.059-0.243-0.176-0.303-0.402-0.104-0.394 0.004-0.727 0.090-0.995 0.121-0.375 0.15-0.465-0.213-0.676-0.309-0.18-0.709-0.166-1.133-0.151-0.652 0.023-1.454 0.051-2.030-0.711-0.451 0.249-1.991 1.155-3.197 2.53-1.269 1.447-2.239 3.367-2.466 3.832 0.025 0.012 0.052 0.021 0.079 0.027 0.25 0.063 0.399-0.038 0.797-0.366 0.242-0.2 0.545-0.45 0.956-0.657 1.329-0.669 3.18-0.999 4.024 0.272 0.393 0.593 0.455 1.285 0.51 1.895 0.066 0.737 0.121 1.161 0.503 1.312 0.634 0.251 1.664-0.067 2.417-0.301 0.378-0.117 0.705-0.218 0.948-0.24l0.090-0.008c0.747-0.074 2.3-0.227 5.384 2.11 0.388 0.295 0.72 0.567 1.043 0.85l-0.022-0.019z"
              ></path>
            </g>
          </svg>
          <div>
            <svg
              id="cabbage-anim-2"
              width="70"
              height="70"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="url(#bgGradient)"
                  stroke="url(#bgGradient)"
                  d="M34.313 15.941c0 1.532-0.332 3.036-0.995 4.499-0.844 1.845-1.775 3.426-2.846 4.9l0.056-0.081c-0.050 0.070-0.1 0.131-0.153 0.189l0.002-0.002 1.307 1.624c0.047 0.058 0.076 0.133 0.076 0.215 0 0.066-0.019 0.128-0.052 0.18l0.001-0.001c-0.035 0.056-0.86 1.391-2.179 2.521-1.325 1.135-2.626 1.632-2.68 1.652-0.036 0.014-0.078 0.022-0.121 0.022-0.087 0-0.167-0.033-0.228-0.086l0 0-1.129-0.998c-0.026-0.023-0.049-0.051-0.067-0.081l-0.001-0.002c-0.993 0.51-2.841 1.195-5.885 1.442-2.695 0.218-4.904-0.123-6.568-1.013-0.089-0.047-0.235-0.118-0.392-0.194-0.27-0.131-0.548-0.265-0.701-0.359-0.15-0.092-0.323-0.191-0.514-0.302-1.487-0.859-4.254-2.457-6.363-6.11-1.787-3.096-1.973-4.636-2.137-5.995-0.098-0.808-0.182-1.506-0.603-2.445-1.070-2.39-1.946-2.868-1.955-2.872-0.087-0.046-0.152-0.126-0.177-0.221l-0.001-0.002c-0.007-0.026-0.011-0.056-0.011-0.087 0-0.072 0.022-0.138 0.060-0.193l-0.001 0.001c0.173-0.25 1.082-1.5 1.96-1.514 0.426-0.007 0.717 0.141 0.929 0.249 0.219 0.11 0.224 0.106 0.286 0.060 0.067-0.050 0.103-0.141 0.158-0.286 0.13-0.345 0.326-0.867 1.334-0.891 0.803-0.020 1.251 0.404 1.577 0.748 0.34-0.681 1.268-2.428 2.483-3.814 0.786-0.895 1.704-1.597 2.335-2.028 0.482-0.329 0.8-0.527 1.017-0.641-0.239-0.441-0.342-0.742-0.422-0.975-0.094-0.274-0.146-0.425-0.366-0.662-0.731-0.788-0.156-2.075-0.049-2.231 0.060-0.086 0.153-0.144 0.26-0.156l0.002-0c0.197-0.022 0.318 0.091 0.539 0.295 0.367 0.339 1.131 1.044 2.428 1.383 1.162 0.303 2.512 0.24 3.703 0.184 0.752-0.035 1.462-0.069 2.024-0.001 1.835 0.221 5.654 0.682 8.794 3.497 1.501 1.346 2.813 3.036 3.732 4.783 0.022 0.029 0.040 0.062 0.052 0.098l0.001 0.002c0.181 0.337 0.38 0.764 0.559 1.202l0.035 0.096c0.589 1.485 0.883 2.954 0.883 4.398zM33.434 17.823c0.48-2.561-0.095-5.054-1.195-7.228-0.307-0.15-1.334-0.586-2.887-0.554-1.83 0.038-2.408 0.355-2.413 0.359-0.049 0.029-0.108 0.045-0.172 0.045-0.125 0-0.234-0.066-0.295-0.165l-0.001-0.002c-0.031-0.050-0.050-0.112-0.050-0.177 0-0.12 0.063-0.226 0.157-0.286l0.001-0.001c0.068-0.042 0.721-0.416 2.758-0.459 1.011-0.021 1.819 0.137 2.388 0.309-0.884-1.454-1.922-2.703-3.117-3.781l-0.015-0.013c-0.543-0.488-1.145-0.932-1.787-1.316l-0.053-0.029c-0.307 0.126-1.194 0.408-2.683 0.254-1.734-0.178-2.68-0.244-2.689-0.244-0.179-0.014-0.319-0.163-0.319-0.345 0-0.007 0-0.014 0.001-0.022l-0 0.001c0.013-0.179 0.161-0.319 0.342-0.319 0.008 0 0.017 0 0.025 0.001l-0.001-0c0.010 0.001 0.965 0.067 2.713 0.247 0.764 0.079 1.344 0.031 1.743-0.040-2.243-1.096-4.456-1.363-5.709-1.514-0.504-0.061-1.187-0.029-1.909 0.005-1.241 0.058-2.646 0.124-3.909-0.206-1.35-0.353-2.178-1.048-2.618-1.45-0.083 0.32-0.127 0.77 0.114 1.030 0.319 0.344 0.408 0.604 0.511 0.905 0.098 0.285 0.219 0.64 0.601 1.256 0.352 0.569 0.814 0.583 1.539 0.558 0.48-0.017 1.023-0.035 1.504 0.244 0.84 0.489 0.647 1.085 0.52 1.479-0.069 0.213-0.129 0.399-0.084 0.592 0.148 0.018 0.564-0.108 0.873-0.202 0.709-0.216 1.682-0.512 2.663-0.352 0.548 0.089 0.883 0.254 1.055 0.517 0.2 0.307 0.117 0.634 0.049 0.896-0.089 0.345-0.081 0.412 0.063 0.511 0.549 0.379 1.051 0.485 1.745 0.632 0.292 0.062 0.624 0.132 0.997 0.232 0.583 0.156 0.99 0.455 1.211 0.889 0.336 0.66 0.244 1.61-0.291 2.99-0.342 0.86-0.547 1.857-0.561 2.899l-0 0.006v0.011c0 0.298 0.139 0.567 0.357 0.862 1.899 1.979 2.97 4.158 3.067 6.305 0.019 0.415 0.003 0.852-0.037 1.295 0.121 0.482 0.495 0.773 0.851 0.892 0.444 0.147 1.067 0.099 1.484-0.481 0.991-1.359 1.899-2.902 2.653-4.532l0.070-0.17c0.194-0.412 0.379-0.907 0.526-1.419l0.018-0.073c-0.165-0.219-0.97-1.232-2.357-2.166-0.164 0.072-1.154 0.494-2.032 0.545-0.438 0.025-1 0.040-1.196-0.033l0.242-0.642s-0.008-0.004-0.029-0.009c0.008 0.002 0.202 0.043 0.943-0 0.461-0.027 0.979-0.181 1.342-0.311-1.808-1.042-2.452-1.195-2.459-1.197-0.155-0.036-0.269-0.173-0.269-0.336 0-0.025 0.003-0.049 0.008-0.072l-0 0.002c0.034-0.156 0.17-0.271 0.334-0.271 0.024 0 0.047 0.002 0.070 0.007l-0.002-0c0.075 0.015 0.787 0.181 2.809 1.359 1.371 0.798 2.305 1.727 2.792 2.282zM26.795 30.917c0.874-0.402 1.628-0.887 2.301-1.463l-0.013 0.011c0.946-0.81 1.635-1.755 1.91-2.16l-1.033-1.283c-0.361 0.47-0.948 1.224-1.362 1.705-1.093 1.272-2.353 2.188-2.406 2.227-0.020 0.014-0.042 0.027-0.066 0.038l-0.002 0.001c-0.056 0.043-0.124 0.091-0.194 0.138l-0.015 0.009 0.88 0.778zM26.724 28.637c0.41-0.361 0.9-0.829 1.353-1.356 0.277-0.322 0.642-0.781 0.959-1.187-0.034 0.002-0.074 0.003-0.114 0.003-0.234 0-0.458-0.039-0.667-0.111l0.014 0.004c-0.303-0.101-0.562-0.261-0.776-0.468l0.001 0c-0.198 1.181-0.517 2.316-0.77 3.114zM25.73 29.43c0.172-0.47 0.995-2.803 1.212-4.95-0.021-0.113-0.034-0.242-0.034-0.374 0-0.014 0-0.028 0-0.043l-0 0.002c0.012-0.662-0.035-1.295-0.142-1.88-0.393-2.149-1.571-3.55-2.275-4.387-0.125-0.147-0.235-0.28-0.328-0.397l-0.087-0.113c-0.595-0.611-1.231-1.173-1.907-1.686l-0.042-0.031c-2.87-2.174-4.242-2.040-4.902-1.975l-0.096 0.009c-0.171 0.015-0.48 0.111-0.807 0.212-0.85 0.264-2.014 0.624-2.873 0.283-0.793-0.314-0.864-1.115-0.933-1.889-0.050-0.555-0.101-1.129-0.398-1.577-0.637-0.958-2.275-0.475-3.143-0.039-0.343 0.172-0.601 0.385-0.828 0.573-0.389 0.322-0.793 0.654-1.401 0.502-0.388-0.097-0.639-0.366-0.882-0.625-0.308-0.33-0.574-0.614-1.124-0.601-0.545 0.014-0.603 0.167-0.708 0.447-0.071 0.187-0.158 0.42-0.388 0.593-0.409 0.307-0.755 0.132-1.008 0.004-0.181-0.092-0.352-0.179-0.608-0.175-0.321 0.005-0.842 0.501-1.204 0.948 0.409 0.349 1.133 1.163 1.944 2.974 0.463 1.034 0.557 1.816 0.657 2.643 0.156 1.294 0.333 2.76 2.050 5.735 2.017 3.494 4.58 4.974 6.112 5.859 0.197 0.114 0.374 0.217 0.529 0.311 0.123 0.076 0.411 0.215 0.642 0.326 0.167 0.081 0.322 0.157 0.417 0.207 1.432 0.767 3.325 1.093 5.634 0.971-1.73-0.513-4.302-1.561-6.692-3.635-4.007-3.477-6.193-10.232-6.284-10.518-0.010-0.031-0.016-0.067-0.016-0.104 0-0.19 0.154-0.343 0.343-0.343 0.152 0 0.282 0.099 0.326 0.237l0.001 0.002c0.021 0.065 2.009 6.206 5.522 9.689 0.222-0.675 0.668-2.242 0.419-3.333-0.167-0.76-0.265-1.155-0.368-1.549l0.083 0.371c-0.213-0.846-0.366-1.457-0.394-2.176l-0-0.014c-0-0.002-0-0.004-0-0.007 0-0.19 0.154-0.343 0.343-0.343 0.187 0 0.339 0.15 0.343 0.336v0c0.024 0.617 0.158 1.174 0.345 1.922l0.642-0.668c0.063-0.065 0.15-0.106 0.248-0.106 0.189 0 0.343 0.154 0.343 0.343 0 0.092-0.036 0.176-0.095 0.237l0-0-0.941 0.98c0.040 0.164 0.081 0.337 0.123 0.52 0.34 1.491-0.389 3.592-0.539 3.996l0.009 0.008c1.283 1.113 2.632 1.92 3.864 2.502-0.498-0.914-1.14-2.406-0.665-3.355 0.315-0.631 0.882-1.11 1.43-1.575 0.599-0.508 1.165-0.987 1.378-1.615 0.047-0.137 0.175-0.233 0.325-0.233 0.189 0 0.343 0.154 0.343 0.343 0 0.039-0.007 0.077-0.019 0.112l0.001-0.002c-0.274 0.808-0.94 1.373-1.585 1.918-0.234 0.198-0.462 0.391-0.665 0.59 0.446 0.144 1.289 0.384 1.978 0.391 0.98 0.011 2.369-0.478 2.383-0.483 0.034-0.013 0.074-0.020 0.115-0.020 0.189 0 0.343 0.153 0.343 0.343 0 0.148-0.094 0.274-0.225 0.322l-0.002 0.001c-0.061 0.022-1.517 0.535-2.621 0.523-0.969-0.011-2.138-0.404-2.447-0.514-0.043 0.067-0.082 0.135-0.118 0.205-0.427 0.856 0.669 2.82 1.086 3.441 0.016 0.024 0.029 0.048 0.038 0.074 1.953 0.774 3.401 0.962 3.427 0.965l0.010 0.002c3.106-0.473 4.496-1.418 4.787-1.64zM23.564 15.857c0.029-1.098 0.249-2.136 0.627-3.095l-0.021 0.062c0.447-1.153 0.554-1.971 0.319-2.432-0.131-0.257-0.385-0.433-0.777-0.538-0.196-0.058-0.52-0.135-0.847-0.203l-0.115-0.020c-0.714-0.151-1.33-0.281-1.993-0.739-0.559-0.386-0.42-0.925-0.337-1.246 0.035-0.139 0.076-0.297 0.041-0.351-0.015-0.022-0.111-0.136-0.591-0.215-0.823-0.135-1.671 0.124-2.352 0.332-0.632 0.192-1.089 0.332-1.43 0.141-0.105-0.059-0.243-0.176-0.303-0.402-0.104-0.394 0.004-0.727 0.090-0.995 0.121-0.375 0.15-0.465-0.213-0.676-0.309-0.18-0.709-0.166-1.133-0.151-0.652 0.023-1.454 0.051-2.030-0.711-0.451 0.249-1.991 1.155-3.197 2.53-1.269 1.447-2.239 3.367-2.466 3.832 0.025 0.012 0.052 0.021 0.079 0.027 0.25 0.063 0.399-0.038 0.797-0.366 0.242-0.2 0.545-0.45 0.956-0.657 1.329-0.669 3.18-0.999 4.024 0.272 0.393 0.593 0.455 1.285 0.51 1.895 0.066 0.737 0.121 1.161 0.503 1.312 0.634 0.251 1.664-0.067 2.417-0.301 0.378-0.117 0.705-0.218 0.948-0.24l0.090-0.008c0.747-0.074 2.3-0.227 5.384 2.11 0.388 0.295 0.72 0.567 1.043 0.85l-0.022-0.019z"
                ></path>
              </g>
            </svg>
            <svg
              id="cabbage-anim-3"
              width="80"
              height="80"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="url(#bgGradient)"
                  stroke="url(#bgGradient)"
                  d="M34.313 15.941c0 1.532-0.332 3.036-0.995 4.499-0.844 1.845-1.775 3.426-2.846 4.9l0.056-0.081c-0.050 0.070-0.1 0.131-0.153 0.189l0.002-0.002 1.307 1.624c0.047 0.058 0.076 0.133 0.076 0.215 0 0.066-0.019 0.128-0.052 0.18l0.001-0.001c-0.035 0.056-0.86 1.391-2.179 2.521-1.325 1.135-2.626 1.632-2.68 1.652-0.036 0.014-0.078 0.022-0.121 0.022-0.087 0-0.167-0.033-0.228-0.086l0 0-1.129-0.998c-0.026-0.023-0.049-0.051-0.067-0.081l-0.001-0.002c-0.993 0.51-2.841 1.195-5.885 1.442-2.695 0.218-4.904-0.123-6.568-1.013-0.089-0.047-0.235-0.118-0.392-0.194-0.27-0.131-0.548-0.265-0.701-0.359-0.15-0.092-0.323-0.191-0.514-0.302-1.487-0.859-4.254-2.457-6.363-6.11-1.787-3.096-1.973-4.636-2.137-5.995-0.098-0.808-0.182-1.506-0.603-2.445-1.070-2.39-1.946-2.868-1.955-2.872-0.087-0.046-0.152-0.126-0.177-0.221l-0.001-0.002c-0.007-0.026-0.011-0.056-0.011-0.087 0-0.072 0.022-0.138 0.060-0.193l-0.001 0.001c0.173-0.25 1.082-1.5 1.96-1.514 0.426-0.007 0.717 0.141 0.929 0.249 0.219 0.11 0.224 0.106 0.286 0.060 0.067-0.050 0.103-0.141 0.158-0.286 0.13-0.345 0.326-0.867 1.334-0.891 0.803-0.020 1.251 0.404 1.577 0.748 0.34-0.681 1.268-2.428 2.483-3.814 0.786-0.895 1.704-1.597 2.335-2.028 0.482-0.329 0.8-0.527 1.017-0.641-0.239-0.441-0.342-0.742-0.422-0.975-0.094-0.274-0.146-0.425-0.366-0.662-0.731-0.788-0.156-2.075-0.049-2.231 0.060-0.086 0.153-0.144 0.26-0.156l0.002-0c0.197-0.022 0.318 0.091 0.539 0.295 0.367 0.339 1.131 1.044 2.428 1.383 1.162 0.303 2.512 0.24 3.703 0.184 0.752-0.035 1.462-0.069 2.024-0.001 1.835 0.221 5.654 0.682 8.794 3.497 1.501 1.346 2.813 3.036 3.732 4.783 0.022 0.029 0.040 0.062 0.052 0.098l0.001 0.002c0.181 0.337 0.38 0.764 0.559 1.202l0.035 0.096c0.589 1.485 0.883 2.954 0.883 4.398zM33.434 17.823c0.48-2.561-0.095-5.054-1.195-7.228-0.307-0.15-1.334-0.586-2.887-0.554-1.83 0.038-2.408 0.355-2.413 0.359-0.049 0.029-0.108 0.045-0.172 0.045-0.125 0-0.234-0.066-0.295-0.165l-0.001-0.002c-0.031-0.050-0.050-0.112-0.050-0.177 0-0.12 0.063-0.226 0.157-0.286l0.001-0.001c0.068-0.042 0.721-0.416 2.758-0.459 1.011-0.021 1.819 0.137 2.388 0.309-0.884-1.454-1.922-2.703-3.117-3.781l-0.015-0.013c-0.543-0.488-1.145-0.932-1.787-1.316l-0.053-0.029c-0.307 0.126-1.194 0.408-2.683 0.254-1.734-0.178-2.68-0.244-2.689-0.244-0.179-0.014-0.319-0.163-0.319-0.345 0-0.007 0-0.014 0.001-0.022l-0 0.001c0.013-0.179 0.161-0.319 0.342-0.319 0.008 0 0.017 0 0.025 0.001l-0.001-0c0.010 0.001 0.965 0.067 2.713 0.247 0.764 0.079 1.344 0.031 1.743-0.040-2.243-1.096-4.456-1.363-5.709-1.514-0.504-0.061-1.187-0.029-1.909 0.005-1.241 0.058-2.646 0.124-3.909-0.206-1.35-0.353-2.178-1.048-2.618-1.45-0.083 0.32-0.127 0.77 0.114 1.030 0.319 0.344 0.408 0.604 0.511 0.905 0.098 0.285 0.219 0.64 0.601 1.256 0.352 0.569 0.814 0.583 1.539 0.558 0.48-0.017 1.023-0.035 1.504 0.244 0.84 0.489 0.647 1.085 0.52 1.479-0.069 0.213-0.129 0.399-0.084 0.592 0.148 0.018 0.564-0.108 0.873-0.202 0.709-0.216 1.682-0.512 2.663-0.352 0.548 0.089 0.883 0.254 1.055 0.517 0.2 0.307 0.117 0.634 0.049 0.896-0.089 0.345-0.081 0.412 0.063 0.511 0.549 0.379 1.051 0.485 1.745 0.632 0.292 0.062 0.624 0.132 0.997 0.232 0.583 0.156 0.99 0.455 1.211 0.889 0.336 0.66 0.244 1.61-0.291 2.99-0.342 0.86-0.547 1.857-0.561 2.899l-0 0.006v0.011c0 0.298 0.139 0.567 0.357 0.862 1.899 1.979 2.97 4.158 3.067 6.305 0.019 0.415 0.003 0.852-0.037 1.295 0.121 0.482 0.495 0.773 0.851 0.892 0.444 0.147 1.067 0.099 1.484-0.481 0.991-1.359 1.899-2.902 2.653-4.532l0.070-0.17c0.194-0.412 0.379-0.907 0.526-1.419l0.018-0.073c-0.165-0.219-0.97-1.232-2.357-2.166-0.164 0.072-1.154 0.494-2.032 0.545-0.438 0.025-1 0.040-1.196-0.033l0.242-0.642s-0.008-0.004-0.029-0.009c0.008 0.002 0.202 0.043 0.943-0 0.461-0.027 0.979-0.181 1.342-0.311-1.808-1.042-2.452-1.195-2.459-1.197-0.155-0.036-0.269-0.173-0.269-0.336 0-0.025 0.003-0.049 0.008-0.072l-0 0.002c0.034-0.156 0.17-0.271 0.334-0.271 0.024 0 0.047 0.002 0.070 0.007l-0.002-0c0.075 0.015 0.787 0.181 2.809 1.359 1.371 0.798 2.305 1.727 2.792 2.282zM26.795 30.917c0.874-0.402 1.628-0.887 2.301-1.463l-0.013 0.011c0.946-0.81 1.635-1.755 1.91-2.16l-1.033-1.283c-0.361 0.47-0.948 1.224-1.362 1.705-1.093 1.272-2.353 2.188-2.406 2.227-0.020 0.014-0.042 0.027-0.066 0.038l-0.002 0.001c-0.056 0.043-0.124 0.091-0.194 0.138l-0.015 0.009 0.88 0.778zM26.724 28.637c0.41-0.361 0.9-0.829 1.353-1.356 0.277-0.322 0.642-0.781 0.959-1.187-0.034 0.002-0.074 0.003-0.114 0.003-0.234 0-0.458-0.039-0.667-0.111l0.014 0.004c-0.303-0.101-0.562-0.261-0.776-0.468l0.001 0c-0.198 1.181-0.517 2.316-0.77 3.114zM25.73 29.43c0.172-0.47 0.995-2.803 1.212-4.95-0.021-0.113-0.034-0.242-0.034-0.374 0-0.014 0-0.028 0-0.043l-0 0.002c0.012-0.662-0.035-1.295-0.142-1.88-0.393-2.149-1.571-3.55-2.275-4.387-0.125-0.147-0.235-0.28-0.328-0.397l-0.087-0.113c-0.595-0.611-1.231-1.173-1.907-1.686l-0.042-0.031c-2.87-2.174-4.242-2.040-4.902-1.975l-0.096 0.009c-0.171 0.015-0.48 0.111-0.807 0.212-0.85 0.264-2.014 0.624-2.873 0.283-0.793-0.314-0.864-1.115-0.933-1.889-0.050-0.555-0.101-1.129-0.398-1.577-0.637-0.958-2.275-0.475-3.143-0.039-0.343 0.172-0.601 0.385-0.828 0.573-0.389 0.322-0.793 0.654-1.401 0.502-0.388-0.097-0.639-0.366-0.882-0.625-0.308-0.33-0.574-0.614-1.124-0.601-0.545 0.014-0.603 0.167-0.708 0.447-0.071 0.187-0.158 0.42-0.388 0.593-0.409 0.307-0.755 0.132-1.008 0.004-0.181-0.092-0.352-0.179-0.608-0.175-0.321 0.005-0.842 0.501-1.204 0.948 0.409 0.349 1.133 1.163 1.944 2.974 0.463 1.034 0.557 1.816 0.657 2.643 0.156 1.294 0.333 2.76 2.050 5.735 2.017 3.494 4.58 4.974 6.112 5.859 0.197 0.114 0.374 0.217 0.529 0.311 0.123 0.076 0.411 0.215 0.642 0.326 0.167 0.081 0.322 0.157 0.417 0.207 1.432 0.767 3.325 1.093 5.634 0.971-1.73-0.513-4.302-1.561-6.692-3.635-4.007-3.477-6.193-10.232-6.284-10.518-0.010-0.031-0.016-0.067-0.016-0.104 0-0.19 0.154-0.343 0.343-0.343 0.152 0 0.282 0.099 0.326 0.237l0.001 0.002c0.021 0.065 2.009 6.206 5.522 9.689 0.222-0.675 0.668-2.242 0.419-3.333-0.167-0.76-0.265-1.155-0.368-1.549l0.083 0.371c-0.213-0.846-0.366-1.457-0.394-2.176l-0-0.014c-0-0.002-0-0.004-0-0.007 0-0.19 0.154-0.343 0.343-0.343 0.187 0 0.339 0.15 0.343 0.336v0c0.024 0.617 0.158 1.174 0.345 1.922l0.642-0.668c0.063-0.065 0.15-0.106 0.248-0.106 0.189 0 0.343 0.154 0.343 0.343 0 0.092-0.036 0.176-0.095 0.237l0-0-0.941 0.98c0.040 0.164 0.081 0.337 0.123 0.52 0.34 1.491-0.389 3.592-0.539 3.996l0.009 0.008c1.283 1.113 2.632 1.92 3.864 2.502-0.498-0.914-1.14-2.406-0.665-3.355 0.315-0.631 0.882-1.11 1.43-1.575 0.599-0.508 1.165-0.987 1.378-1.615 0.047-0.137 0.175-0.233 0.325-0.233 0.189 0 0.343 0.154 0.343 0.343 0 0.039-0.007 0.077-0.019 0.112l0.001-0.002c-0.274 0.808-0.94 1.373-1.585 1.918-0.234 0.198-0.462 0.391-0.665 0.59 0.446 0.144 1.289 0.384 1.978 0.391 0.98 0.011 2.369-0.478 2.383-0.483 0.034-0.013 0.074-0.020 0.115-0.020 0.189 0 0.343 0.153 0.343 0.343 0 0.148-0.094 0.274-0.225 0.322l-0.002 0.001c-0.061 0.022-1.517 0.535-2.621 0.523-0.969-0.011-2.138-0.404-2.447-0.514-0.043 0.067-0.082 0.135-0.118 0.205-0.427 0.856 0.669 2.82 1.086 3.441 0.016 0.024 0.029 0.048 0.038 0.074 1.953 0.774 3.401 0.962 3.427 0.965l0.010 0.002c3.106-0.473 4.496-1.418 4.787-1.64zM23.564 15.857c0.029-1.098 0.249-2.136 0.627-3.095l-0.021 0.062c0.447-1.153 0.554-1.971 0.319-2.432-0.131-0.257-0.385-0.433-0.777-0.538-0.196-0.058-0.52-0.135-0.847-0.203l-0.115-0.020c-0.714-0.151-1.33-0.281-1.993-0.739-0.559-0.386-0.42-0.925-0.337-1.246 0.035-0.139 0.076-0.297 0.041-0.351-0.015-0.022-0.111-0.136-0.591-0.215-0.823-0.135-1.671 0.124-2.352 0.332-0.632 0.192-1.089 0.332-1.43 0.141-0.105-0.059-0.243-0.176-0.303-0.402-0.104-0.394 0.004-0.727 0.090-0.995 0.121-0.375 0.15-0.465-0.213-0.676-0.309-0.18-0.709-0.166-1.133-0.151-0.652 0.023-1.454 0.051-2.030-0.711-0.451 0.249-1.991 1.155-3.197 2.53-1.269 1.447-2.239 3.367-2.466 3.832 0.025 0.012 0.052 0.021 0.079 0.027 0.25 0.063 0.399-0.038 0.797-0.366 0.242-0.2 0.545-0.45 0.956-0.657 1.329-0.669 3.18-0.999 4.024 0.272 0.393 0.593 0.455 1.285 0.51 1.895 0.066 0.737 0.121 1.161 0.503 1.312 0.634 0.251 1.664-0.067 2.417-0.301 0.378-0.117 0.705-0.218 0.948-0.24l0.090-0.008c0.747-0.074 2.3-0.227 5.384 2.11 0.388 0.295 0.72 0.567 1.043 0.85l-0.022-0.019z"
                ></path>
              </g>
            </svg>
          </div>
        </CabbagePicWrapper>
      </LoaderWrapper>
    </LoaderOverlay>
  );
};