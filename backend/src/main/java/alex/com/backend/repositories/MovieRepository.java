package alex.com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import alex.com.backend.models.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
