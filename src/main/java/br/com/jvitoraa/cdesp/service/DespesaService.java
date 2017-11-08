package br.com.jvitoraa.cdesp.service;

import java.util.List;

import br.com.jvitoraa.cdesp.model.Despesa;
/**
 * Interface de serviço
 * @author jalmeial
 *
 */
public interface DespesaService {
	
	Despesa findById(Long id);
	
	void saveDespesa(Despesa despesa);
	
	void deleteDespesaById(Long id);
	
	List<Despesa> findAllDespesas();
}
