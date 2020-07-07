package com.google.sps.servlets;

import java.util.Objects;

public class Comment {
    private String name;
    private String comment;
    private float sentiment_score;
    private float abs_score;

    public Comment(String name, String comment) {
        this.name = name;
        this.comment = comment;
    }

    public Comment(String name, String comment, float sentiment_score) {
        this.name = name;
        this.comment = comment;
        this.sentiment_score = sentiment_score;
    }

    public void setAbs_score(float abs_score) {
        this.abs_score = abs_score;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public float getSentiment_score() {
        return sentiment_score;
    }

    public void setSentiment_score(float sentiment_score) {
        this.sentiment_score = sentiment_score;
        this.setAbs_score(Math.abs(sentiment_score));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment1 = (Comment) o;
        return Float.compare(comment1.sentiment_score, sentiment_score) == 0 &&
                name.equals(comment1.name) &&
                comment.equals(comment1.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, comment, sentiment_score);
    }
}