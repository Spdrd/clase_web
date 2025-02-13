package com.example.demo;

import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/hola")
public class HolaMundoServlet extends HttpServlet {
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException{
        ServletOutputStream outputStream = response.getOutputStream();
        
    }
}
