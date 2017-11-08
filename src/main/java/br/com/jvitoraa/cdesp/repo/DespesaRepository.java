package br.com.jvitoraa.cdesp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jvitoraa.cdesp.model.Despesa;

@Repository
public interface DespesaRepository extends JpaRepository<Despesa, Long>{
}
