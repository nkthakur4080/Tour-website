import "./HeaderTopbar.scss";

export default function HeaderTopbar() {
    return (
        <div className="topbar">
            <div className="container topbar__inner">
                <span className="topbar__item">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        className="topbar__icon"
                    >
                        <path
                            d="M4 6.75h16a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-9A.75.75 0 0 1 4 6.75Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                        <path
                            d="m4 8 8 5 8-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>info@hikoraput.com</span>
                </span>

                <span className="topbar__item">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        className="topbar__icon"
                    >
                        <path
                            d="M7.5 4.5h2.25l1.2 3a1.5 1.5 0 0 1-.38 1.66l-1.03 1.03a12.03 12.03 0 0 0 4.27 4.27l1.03-1.03a1.5 1.5 0 0 1 1.66-.38l3 1.2v2.25a1.5 1.5 0 0 1-1.64 1.5C10.64 17.44 6.56 13.36 6 6.14A1.5 1.5 0 0 1 7.5 4.5Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>09686848817</span>
                </span>
            </div>
        </div>
    );
}
