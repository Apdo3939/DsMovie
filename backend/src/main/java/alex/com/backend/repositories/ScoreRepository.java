package alex.com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import alex.com.backend.models.Score;
import alex.com.backend.models.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
