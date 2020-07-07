// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;

import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

@WebServlet("/comment")
public final class CommentServlet extends HttpServlet {
    private List<Comment> comments =   new ArrayList<>();
  @Override
  public void doPost(HttpServletRequest req, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    req.setCharacterEncoding("utf-8");
    StringBuilder strbuilder = new StringBuilder();
    try(BufferedReader reader = req.getReader();) {
          char[] buff = new char[1024];
          int len;
          while((len = reader.read(buff)) != -1) {
              strbuilder.append(buff,0, len);
          }
     }catch (IOException e) {
          e.printStackTrace(); 
    }

    Gson gson = new Gson();
    String json = strbuilder.toString();
    
    Comment comment = gson.fromJson(json, Comment.class);

    String name = comment.name;
    String content = comment.comment;
    
    System.out.println("name:" +name);
    System.out.println("comment content:"+content);
    
    this.comments.add(comment);

    // Respond with the result.
    response.setContentType("application/json");
    response.getWriter().println("OK");
  }
  
  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse response) throws IOException {
    response.setContentType("application/json");
    
    Gson gson = new Gson();
    String json = gson.toJson(this.comments);  
    response.getWriter().println(json);
  }
}