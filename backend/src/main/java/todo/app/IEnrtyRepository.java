package todo.app;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IEnrtyRepository extends JpaRepository <Entry, Long> {}
