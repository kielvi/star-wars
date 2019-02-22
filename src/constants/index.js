import React, { Component } from 'react';

export const DEFAULT_QUERY	= '';
export const PATH_BASE		= 'https://swapi.co/api';
export const PATH_SEARCH	= '/films';
export const PARAM_SEARCH	= 'format=json';

export const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}`;


export const largeColunm	= { width: '40%' }
export const midColumn		= { width: '30%' }
export const smallColumn	= { width: '10%' }

