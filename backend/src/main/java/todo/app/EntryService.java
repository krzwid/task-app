package todo.app;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EntryService {

    @Autowired
    IEnrtyRepository entryRepository;

    @Autowired
    ObjectMapper objectMapper;

    @CrossOrigin
    @GetMapping("/entries")
    public ResponseEntity getEntries() throws JsonProcessingException {
        List<Entry> entries = entryRepository.findAll();
        return ResponseEntity.ok(objectMapper.writeValueAsString(entries));
    }

    @GetMapping("/entries/{id}")
    public ResponseEntity getOneEntry(@PathVariable Long id) throws JsonProcessingException {
        Optional<Entry> entries = entryRepository
                .findAll()
                .stream()
                .filter(entry -> entry.getId() == id)
                .findFirst();

        return ResponseEntity.ok(objectMapper.writeValueAsString(entries));
    }

    @CrossOrigin
    @PostMapping("/entries")
    public ResponseEntity addEntry(@RequestBody Entry entry) {
        Entry savedEntry = entryRepository.save(entry);
        return ResponseEntity.ok(savedEntry);
    }

    @CrossOrigin
    @DeleteMapping ("/entries/{id}")
    public ResponseEntity deleteEntry(@PathVariable Long id) {

        Optional<Entry> entry = entryRepository
                .findAll()
                .stream()
                .filter(entryToDelete -> entryToDelete.getId() ==  id)
                .findFirst();

        entryRepository.deleteById(id);

        return ResponseEntity.ok(entry);
    }
}
