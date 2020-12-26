package todo.app;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "entries")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@ToString
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;

    private Date deadline;

    @NonNull
    private String description;
}
