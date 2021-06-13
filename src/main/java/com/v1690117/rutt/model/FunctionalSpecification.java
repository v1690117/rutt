package com.v1690117.rutt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Data
@Entity
@Table(name = "functional_specifications")
@NoArgsConstructor
@AllArgsConstructor
public class FunctionalSpecification {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Fetch(FetchMode.SUBSELECT)
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "specification")
    private List<Function> functions;

    public FunctionalSpecification(Long id) {
        this.id = id;
    }
}
