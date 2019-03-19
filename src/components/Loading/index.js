import React from "react";
import './index.css';

const Loading = () => {
	
	return (
		<div className="loading">
			<div className="loading-text">Loading...</div>
			<div className="droid">
				<div className="droid-head">
					<div className="droid-head__eye"></div>
					<div className="droid-head__eye--small"></div>
					<div className="droid-head__eye--tiny"></div>
				</div>
				<div className="droid-neck"></div>

				<div className="droid-body">
					<div className="droid-body__panel--left"></div>
					<div className="droid-body__panel--left-rotate"></div>
					<div className="droid-body__panel-decor"></div>
					<div className="droid-body__panel--center">
					</div>
					<div className="droid-body__panel--center-rotate"></div>
					<div className="droid-body__panel--right"></div>
					<div className="droid-body__panel--right-rotate"></div>
				</div>

			</div>

		</div>
	);
};

export default Loading;
