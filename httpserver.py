# -*- coding: utf-8 -*-
"""
---------------------------------------------------------------------
    File Name:           httpserver.py
    Description:         
    Author:              xiaoyan
    Date:                01/18/2023 8:26 PM
---------------------------------------------------------------------
"""

from http.server import HTTPServer, CGIHTTPRequestHandler
port = 8080
httpd = HTTPServer(('', port), CGIHTTPRequestHandler)
httpd.serve_forever()