package alex.com.backend.dtos;

import java.io.Serializable;

import alex.com.backend.models.Movie;

public class ScoreDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long movieId;
	private String email;
	private Double score;
	

	public ScoreDTO() {
		// TODO Auto-generated constructor stub
	}

	//Getters and Setters
	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	
}
