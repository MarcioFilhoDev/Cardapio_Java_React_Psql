package com.psql.cardapio;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CardapioRepo extends JpaRepository<Produto, Long> {
}
