package com.trudiary.repository;
import com.trudiary.model.SupportGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SupportGroupRepository extends JpaRepository<SupportGroup, Integer> {
    List<SupportGroup> findByTitle(String title);

    List<SupportGroup> findByOwner(String owner);

    SupportGroup getByID(int supportGroupID);
}
