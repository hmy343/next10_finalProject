import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <>    
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">BTS</a>
                    <button class="navbar-toggler" type="button">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="Analysis">지수</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Keyword">키워드</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Search">검색순위</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Visitor">방문자수</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Cost">사용금액</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;